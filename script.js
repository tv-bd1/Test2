// আপনার চ্যানেলের ডাটাবেস (সংক্ষিপ্ত রাখা হয়েছে, আপনি আপনার পুরো লিস্ট এখানে বসাবেন)
const channels = [
  { "id": "2026", "name": "Fancode 2026", "logo": "https://www.fancode.com/skillup-uploads/cms-media/140086_5928_RLS_DW_FC-Web_1769807667662.jpg", "url": "https://biostar-tv-world.vercel.app/?id=2026" },
  { "id": "btv", "name": "BTV", "logo": "https://i.postimg.cc/JnWdHSrq/20250529-071604.png", "url": "https://biostar-tv-world.vercel.app/?id=btv" },
  { "id": "gtv", "name": "GTV", "logo": "https://i.postimg.cc/jjKGfnW8/20250704_201040.png", "url": "https://biostar-tv-world.vercel.app/?id=gtv" },
  { "id": "t-sports-hd", "name": "T Sports HD", "logo": "https://i.postimg.cc/VL5yTtwr/20250707_141739.png", "url": "https://biostar-tv-world.vercel.app/?id=t-sports-hd" },
  // ... বাকি সব চ্যানেল এখানে যুক্ত করুন
];

let currentIndex = 0;
let player = null;

function loadChannel(index) {
  currentIndex = index;
  const channel = channels[currentIndex];
  
  if (player) {
    player.destroy(); // পুরনো মেমোরি ক্লিয়ার করা
  }

  // প্লেয়ার সেটআপ
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
        liveSyncDurationCount: 3,
        enableWorker: true // পারফরম্যান্স বাড়াবে
      }
    }
  });

  updateActiveUI();
}

function updateActiveUI() {
  // লিস্টে একটিভ চ্যানেল হাইলাইট করা
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
  let next = (currentIndex + 1) % channels.length;
  loadChannel(next);
}

function prevChannel() {
  let prev = (currentIndex - 1 + channels.length) % channels.length;
  loadChannel(prev);
}

// কিবোর্ড কন্ট্রোল
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') prevChannel();
  if (e.key === 'ArrowDown') nextChannel();
});

// ইনিশিয়াল লোড
window.onload = () => {
  renderChannelList();
  loadChannel(0);
};
