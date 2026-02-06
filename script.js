let channels = [];
let currentChannelIndex = 0;
let player = null;

// পেজ লোড হলে M3U লোড হবে
window.onload = () => {
    // সরাসরি GitHub লিঙ্ক ব্যবহার না করে AllOrigins প্রক্সি দিয়ে কল করছি
    fetchM3U('https://raw.githubusercontent.com/tvbd/m3uplayer/refs/heads/main/m3u/nexgen.m3u');
};

async function fetchM3U(url) {
    const listContainer = document.getElementById("channelList");
    listContainer.innerHTML = '<li>চ্যানেল লোড হচ্ছে...</li>';

    try {
        // প্রক্সি ছাড়া সরাসরি GitHub অনেক সময় ব্লক করে, তাই এই লিঙ্কটি ব্যবহার করুন
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const result = await response.json();
        const rawData = result.contents;

        if (!rawData) throw new Error("No data found");

        parseM3U(rawData);
    } catch (error) {
        console.error("Error:", error);
        listContainer.innerHTML = '<li>প্লেলিস্ট লোড করা যায়নি। ইন্টারনেটের সমস্যা হতে পারে।</li>';
    }
}

function parseM3U(data) {
    const lines = data.split('\n');
    channels = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line.startsWith('#EXTINF:')) {
            // নাম বের করা (কমা চিহ্নের পরের অংশ)
            const name = line.split(',')[1] || "Unknown Channel";
            
            // লোগো বের করা
            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
            const logo = logoMatch ? logoMatch[1] : 'https://via.placeholder.com/40';

            // পরের লাইন বা তার পরের লাইনে URL খোঁজা
            let streamUrl = "";
            for (let j = i + 1; j <= i + 2; j++) {
                if (lines[j] && lines[j].trim().startsWith('http')) {
                    streamUrl = lines[j].trim();
                    break;
                }
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
        li.onclick = () => {
            currentChannelIndex = index;
            loadPlayer(channel.url);
        };
        list.appendChild(li);
    });

    if (channels.length > 0 && !player) {
        loadPlayer(channels[0].url); // প্রথম চ্যানেল লোড হবে
    }
}

function loadPlayer(url) {
    if (player) player.destroy();
    
    player = new Clappr.Player({
        source: url,
        parentId: "#player",
        width: "100%",
        height: "100%",
        autoPlay: true,
        plugins: [PlaybackRatePlugin, ClapprPipPlugin],
        hlsjsConfig: {
            enableWorker: true
        }
    });
}

// আপনার index.html-এ থাকা বাটনগুলোর জন্য ফাংশন
function nextChannel() {
    currentChannelIndex = (currentChannelIndex + 1) % channels.length;
    loadPlayer(channels[currentChannelIndex].url);
}

function prevChannel() {
    currentChannelIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
    loadPlayer(channels[currentChannelIndex].url);
}

function searchChannels() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = channels.filter(c => c.name.toLowerCase().includes(query));
    renderChannels(filtered);
}
