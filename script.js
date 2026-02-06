let channels = [];
let currentChannelIndex = 0;
let player = null;

// পেজ লোড হলে M3U ফাইল নিয়ে আসা
window.onload = () => {
    fetchM3U('https://raw.githubusercontent.com/tvbd/m3uplayer/refs/heads/main/m3u/nexgen.m3u');
};

async function fetchM3U(url) {
    const listContainer = document.getElementById("channelList");
    listContainer.innerHTML = '<li>চ্যানেল লোড হচ্ছে...</li>';

    try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const result = await response.json();
        
        if (result.contents) {
            parseM3U(result.contents);
        }
    } catch (error) {
        listContainer.innerHTML = '<li>লোডিং এরর! দয়া করে রিফ্রেশ দিন।</li>';
    }
}

function parseM3U(data) {
    const lines = data.split('\n');
    channels = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line.startsWith('#EXTINF:')) {
            const name = line.split(',')[1] || "Unknown Channel";
            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
            const logo = logoMatch ? logoMatch[1] : 'https://via.placeholder.com/40';
            
            let streamUrl = "";
            if (lines[i+1] && !lines[i+1].startsWith('#')) {
                streamUrl = lines[i+1].trim();
            }

            if (streamUrl) {
                channels.push({ name, logo, url: streamUrl });
            }
        }
    }
    renderChannels();
}

function renderChannels(data = channels) {
    const list = document.getElementById("channelList");
    list.innerHTML = '';

    data.forEach((channel, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${channel.logo}" onerror="this.src='https://via.placeholder.com/40'"> <span>${channel.name}</span>`;
        li.onclick = () => playChannel(index);
        list.appendChild(li);
    });

    if (channels.length > 0) playChannel(0); // অটোমেটিক প্রথম চ্যানেল চালু
}

function playChannel(index) {
    const channel = channels[index];
    currentChannelIndex = index;
    
    const clapprElement = document.getElementById("player");
    const iframeElement = document.getElementById("web-player");

    // যদি লিঙ্কটি .m3u8 হয়, তবে Clappr চালাও
    if (channel.url.includes(".m3u8")) {
        iframeElement.style.display = "none";
        clapprElement.style.display = "block";
        
        if (player) player.destroy();
        player = new Clappr.Player({
            source: channel.url,
            parentId: "#player",
            width: "100%",
            height: "100%",
            autoPlay: true,
            plugins: [PlaybackRatePlugin, ClapprPipPlugin]
        });
    } 
    // অন্য সব সাধারণ লিঙ্ক (যেমন Vercel লিঙ্ক) এর জন্য Iframe চালাও
    else {
        if (player) player.destroy();
        clapprElement.style.display = "none";
        iframeElement.style.display = "block";
        iframeElement.src = channel.url;
    }
}

// নেক্সট, প্রিভিয়াস এবং সার্চ ফাংশন
function nextChannel() { playChannel((currentChannelIndex + 1) % channels.length); }
function prevChannel() { playChannel((currentChannelIndex - 1 + channels.length) % channels.length); }
function searchChannels() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = channels.filter(c => c.name.toLowerCase().includes(query));
    renderChannels(filtered);
}
