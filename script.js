let channels = [];
let currentChannel = 0;
let player = null;

// M3U ফাইল থেকে ডেটা লোড করার ফাংশন (CORS Proxy যুক্ত)
async function loadM3UFromURL(url) {
  try {
    // CORS সমস্যা এড়াতে প্রক্সি ব্যবহার করা হয়েছে
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const result = await response.json();
    const data = result.contents; // Proxy থেকে আসা টেক্সট ডাটা
    
    const lines = data.split('\n');
    channels = []; 

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      if (line.startsWith('#EXTINF:')) {
        // লোগো এবং নাম খুঁজে বের করা
        const nameMatch = line.split(',')[1] || "Unknown Channel";
        const logoMatch = line.match(/tvg-logo="([^"]+)"/);
        const logo = logoMatch ? logoMatch[1] : 'https://via.placeholder.com/40';
        
        const streamUrl = lines[i + 1] ? lines[i + 1].trim() : '';

        if (streamUrl && !streamUrl.startsWith('#')) {
          channels.push({
            name: nameMatch.trim(),
            logo: logo,
            url: streamUrl
          });
        }
      }
    }
    
    renderChannelList();
    if (channels.length > 0) {
      loadChannel(channels[0]);
    }

  } catch (error) {
    console.error("M3U লোড করতে সমস্যা হয়েছে:", error);
    document.getElementById("channelList").innerHTML = 
      '<p style="text-align: center; color: #ff5722;">CORS সমস্যার কারণে প্লেলিস্ট লোড করা যায়নি।</p>';
  }
}

function loadChannel(channel) {
  if (player) player.destroy();

  const playerContainer = document.getElementById("player");
  playerContainer.style.opacity = 0;

  setTimeout(() => {
    player = new Clappr.Player({
      source: channel.url,
      parentId: "#player",
      width: "100%",
      height: "100%",
      autoPlay: true,
      mute: false,
      // আপনার index.html এ থাকা প্লাগইনগুলো এখানে ব্যবহার হচ্ছে
      plugins: [PlaybackRatePlugin, ClapprPipPlugin],
    });
    playerContainer.style.opacity = 1;
  }, 300);
}

function renderChannelList(channelArray = channels) {
  const list = document.getElementById("channelList");
  list.innerHTML = '';
  
  if (channelArray.length === 0) {
    list.innerHTML = '<p style="text-align: center; color: #888;">কোনো চ্যানেল পাওয়া যায়নি।</p>';
    return;
  }

  channelArray.forEach((channel) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${channel.logo}" onerror="this.src='https://via.placeholder.com/40'"> ${channel.name}`;
    li.onclick = () => {
      currentChannel = channels.findIndex(c => c.url === channel.url);
      loadChannel(channel);
    };
    list.appendChild(li);
  });
}

function searchChannels() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredChannels = channels.filter(channel => 
    channel.name.toLowerCase().includes(searchTerm)
  );
  renderChannelList(filteredChannels);
}

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
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    prevChannel();
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    nextChannel();
  }
});

// লোড কল
loadM3UFromURL('https://sonamul4545.vercel.app/siyam3535.m3u');
