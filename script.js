let channels = [];
let currentChannelIndex = 0;
let player = null;

// পেজ লোড হলে M3U ফেচ করা শুরু হবে
window.onload = () => {
    loadM3UFromURL('https://raw.githubusercontent.com/tvbd/m3uplayer/refs/heads/main/m3u/nexgen.m3u');
};

async function loadM3UFromURL(url) {
    const listContainer = document.getElementById("channelList");
    listContainer.innerHTML = '<p style="text-align: center; color: #ff5722;">চ্যানেল লোড হচ্ছে, দয়া করে অপেক্ষা করুন...</p>';

    try {
        // CORS সমস্যা এড়াতে প্রক্সি ব্যবহার করা হয়েছে
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const result = await response.json();
        const data = result.contents;

        parseM3UData(data);
    } catch (error) {
        console.error("M3U Load Error:", error);
        listContainer.innerHTML = '<p style="text-align: center; color: #f44336;">লিঙ্ক থেকে ডেটা পাওয়া যায়নি।</p>';
    }
}

function parseM3UData(data) {
    const lines = data.split('\n');
    channels = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        
        if (line.startsWith('#EXTINF:')) {
            // চ্যানেলের নাম বের করা
            const nameParts = line.split(',');
            const name = nameParts[nameParts.length - 1].trim() || "Unknown Channel";
            
            // লোগো বের করা
            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
            const logo = logoMatch ? logoMatch[1] : 'https://via.placeholder.com/40';
            
            // পরের লাইনে URL থাকে
            let streamUrl = "";
            if (lines[i + 1] && !lines[i + 1].startsWith('#')) {
                streamUrl = lines[i + 1].trim();
            } else if (lines[i + 2] && !lines[i + 2].startsWith('#')) {
                streamUrl = lines[i + 2].trim();
            }

            if (streamUrl) {
                channels.push({
                    name: name,
                    logo: logo,
                    url: streamUrl
                });
            }
        }
    }

    if (channels.length > 0) {
        renderChannelList(channels);
        loadChannel(0); // প্রথম চ্যানেলটি চালু করা
    } else {
        document.getElementById("channelList").innerHTML = '<p style="text-align: center;">কোনো চ্যানেল পাওয়া যায়নি।</p>';
    }
}

function renderChannelList(channelArray) {
    const list = document.getElementById("channelList");
    list.innerHTML = '';

    channelArray.forEach((channel, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${channel.logo}" onerror="this.src='https://via.placeholder.com/40'"> <span>${channel.name}</span>`;
        
        li.onclick = () => {
            currentChannelIndex = channels.findIndex(c => c.url === channel.url);
            loadChannel(currentChannelIndex);
        };
        list.appendChild(li);
    });
}

function loadChannel(index) {
    if (index < 0 || index >= channels.length) return;
    
    const channel = channels[index];
    currentChannelIndex = index;

    // লিস্টে একটিভ ক্লাস যোগ করা
    const allListItems = document.querySelectorAll("#channelList li");
    allListItems.forEach(item => item.classList.remove("active"));
    if (allListItems[index]) allListItems[index].classList.add("active");

    if (player) player.destroy();

    // Clappr Player Setup
    player = new Clappr.Player({
        source: channel.url,
        parentId: "#player",
        width: "100%",
        height: "100%",
        autoPlay: true,
        plugins: [PlaybackRatePlugin, ClapprPipPlugin],
        mediacontrol: {seekbar: "#ff5722", buttons: "#ff5722"},
    });
}

// সার্চ ফাংশন
function searchChannels() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = channels.filter(c => c.name.toLowerCase().includes(searchTerm));
    renderChannelList(filtered);
}

// নেক্সট/প্রিভিয়াস ফাংশন
function nextChannel() {
    loadChannel((currentChannelIndex + 1) % channels.length);
}

function prevChannel() {
    loadChannel((currentChannelIndex - 1 + channels.length) % channels.length);
}

// কিবোর্ড ইভেন্ট
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') nextChannel();
    if (e.key === 'ArrowUp') prevChannel();
});
