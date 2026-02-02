const channels = [
  { "id": "2026", "name": "Fancode 2026", "logo": "https://www.fancode.com/skillup-uploads/cms-media/140086_5928_RLS_DW_FC-Web_1769807667662.jpg", "url": "https://biostar-tv-world.vercel.app/?id=2026" },
  { "id": "btv", "name": "BTV", "logo": "https://i.postimg.cc/JnWdHSrq/20250529-071604.png", "url": "https://biostar-tv-world.vercel.app/?id=btv" },
  { "id": "gtv", "name": "GTV", "logo": "https://i.postimg.cc/jjKGfnW8/20250704_201040.png", "url": "https://biostar-tv-world.vercel.app/?id=gtv" },
  { "id": "t-sports-hd", "name": "T Sports HD", "logo": "https://i.postimg.cc/VL5yTtwr/20250707_141739.png", "url": "https://biostar-tv-world.vercel.app/?id=t-sports-hd" },
  // ... এখানে আপনার বাকি সব চ্যানেল লিস্ট কপি করে দিন
];

let currentIndex = 0;
let player = null;

function loadChannel(index) {
  currentIndex = index;
  const channel = channels[currentIndex];

  if (player) {
    player.destroy(); // পুরনো মেমোরি ক্লিয়ার করা
  }

  player = new Clappr.Player({
    source: channel.url,
    parentId: "#player",
    width: "100%",
    height: "100%",
    autoPlay: true,
    preload: 'auto',
    mimeType: "application/x-mpegURL",
    plugins: [ClapprPipPlugin, ClapprPlaybackRatePlugin],
    playback: {
      hlsjsConfig: {
        maxBufferSize: 0,
        maxBufferLength: 10,
        enableWorker: true
      }
    },
    events: {
      onError: function(e) {
        console.log("Retrying...");
        player.configure({source: channel.url});
      }
    }
  });

  updateActiveUI();
}

function updateActiveUI() {
  const items = document.querySelectorAll('#channelList li');
  items.forEach((item, idx) => {
    item.classList.toggle('active', idx === currentIndex);
    if(idx === currentIndex) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function renderChannelList(data = channels) {
  const list = document.getElementById("channelList");
  list.innerHTML = data.map((channel, index) => `
    <li onclick="loadChannel(${channels.indexOf(channel)})">
      <img src="${channel.logo}" onerror="this.src='https://via.placeholder.com/40'"> 
      <span>${channel.name}</span>
    </li>
  `).join('');
  updateActiveUI();
}

function searchChannels() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = channels.filter(c => c.name.toLowerCase().includes(query));
  renderChannelList(filtered);
}

function nextChannel() {
  currentIndex = (currentIndex + 1) % channels.length;
  loadChannel(currentIndex);
}

function prevChannel() {
  currentIndex = (currentIndex - 1 + channels.length) % channels.length;
  loadChannel(currentIndex);
}

// কিবোর্ড সাপোর্ট
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') prevChannel();
  if (e.key === 'ArrowDown') nextChannel();
});

// প্রথম চ্যানেল চালানো
window.onload = () => {
  renderChannelList();
  loadChannel(0);
};
