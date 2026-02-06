let channels = [];
let currentChannel = 0;
let player = null;

// M3U ফাইল থেকে ডেটা লোড করার ফাংশন
async function loadM3U() {
    const m3uUrl = 'https://sonamul4545.vercel.app/siyam3535.m3u';
    // CORS সমস্যা সমাধানের জন্য অল-অরিজিন প্রক্সি
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(m3uUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const content = data.contents; // এখানে আসল M3U টেক্সট থাকে
        
        parseM3U(content);
    } catch (error) {
        console.error("Error loading M3U:", error);
        document.getElementById("channelList").innerHTML = '<li>প্লেলিস্ট লোড হতে সমস্যা হয়েছে</li>';
    }
}

// M3U টেক্সট পার্স করার ফাংশন
function parseM3U(data) {
    const lines = data.split('\n');
    channels = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('#EXTINF:')) {
            // চ্যানেলের নাম বের করা
            const name = line.split(',')[1] || "Unknown Channel";
            
            // লোগো বের করা
            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
            const logo = logoMatch ? logoMatch[1] : 'https://via.placeholder.com/40';

            // পরের লাইনে URL থাকে
            const url = lines[i + 1] ? lines[i + 1].trim() : '';

            if (url && !url.startsWith('#')) {
                channels.push({
                    name: name,
                    logo: logo,
                    url: url
                });
            }
        }
    }

    renderChannelList();
    if (channels.length > 0) {
        loadChannel(channels[0]);
    }
}

// চ্যানেল লিস্ট ইন্টারফেসে দেখানো
function renderChannelList(channelArray = channels) {
    const list = document.getElementById("channelList");
    list.innerHTML = '';

    channelArray.forEach((channel, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${channel.logo}" onerror="this.src='https://via.placeholder.com/40'"> ${channel.name}`;
        li.onclick = () => {
            currentChannel = channels.findIndex(c => c.url === channel.url);
            loadChannel(channel);
        };
        list.appendChild(li);
    });
}

// প্লেয়ারে চ্যানেল লোড করা
function loadChannel(channel) {
    if (player) player.destroy();

    player = new Clappr.Player({
        source: channel.url,
        parentId: "#player",
        width: "100%",
        height: "100%",
        autoPlay: true,
        plugins: [PlaybackRatePlugin, ClapprPipPlugin],
    });
}

// সার্চ ফাংশন
function searchChannels() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredChannels = channels.filter(channel => 
        channel.name.toLowerCase().includes(searchTerm)
    );
    renderChannelList(filteredChannels);
}

// নেক্সট এবং প্রিভিয়াস বাটন
function nextChannel() {
    if (channels.length === 0) return;
    currentChannel = (currentChannel + 1) % channels.length;
    loadChannel(channels[currentChannel]);
}

function prevChannel() {
    if (channels.length === 0) return;
    currentChannel = (currentChannel - 1 + channels.length) % channels.length;
    loadChannel(channels[currentChannel]);
}

// কিবোর্ড কন্ট্রোল
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') prevChannel();
    if (event.key === 'ArrowDown') nextChannel();
});

// পেজ লোড হলে M3U ফেচ করা শুরু হবে
loadM3U();
