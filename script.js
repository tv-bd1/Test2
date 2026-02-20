const channels = [
  {
    "id": "2026",
    "name": "Fancode 2026",
    "logo": "https://www.fancode.com/skillup-uploads/cms-media/140086_5928_RLS_DW_FC-Web_1769807667662.jpg",
    "category": "Sports",
    "url": "https://biostar-tv-world.vercel.app/?id=2026"
  },
  {
    "id": "btv",
    "name": "BTV",
    "logo": "https://i.postimg.cc/JnWdHSrq/20250529-071604.png",
    "category": "Bangla",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8"
  },
  {
    "id": "btv-news",
    "name": "BTV News",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/BTV_NEWS_Logo_-_Bangladesh_Television.png",
    "category": "News",
    "url": "https://biostar-tv-world.vercel.app/?id=btv-news"
  },
  {
    "id": "jamuna-tv",
    "name": "Jamuna TV",
    "logo": "https://i.postimg.cc/L4D0hyrt/20250529-071035.png",
    "category": "News",
    "url": "https://biostar-tv-world.vercel.app/?id=jamuna-tv"
  },
  {
    "id": "quran-tv",
    "name": "Quran TV",
    "logo": "https://e7.pngegg.com/pngimages/407/223/png-clipart-quran-mecca-television-channel-television-show-the-holy-quran-miscellaneous-television.png",
    "category": "Islamic",
    "url": "https://biostar-tv-world.vercel.app/?id=quran-tv"
  },
  {
    "id": "somoy-tv",
    "name": "Somoy TV",
    "logo": "https://i.postimg.cc/Qxn4JFNV/20250529-071147.png",
    "category": "News",
    "url": "https://biostar-tv-world.vercel.app/?id=somoy-tv"
  },
  {
    "id": "t-sports-hd",
    "name": "T Sports HD",
    "logo": "https://i.postimg.cc/VL5yTtwr/20250707_141739.png",
    "category": "Sports",
    "url": "https://biostar-tv-world.vercel.app/?id=t-sports-hd"
  },
  {
    "id": "sony-ten-1",
    "name": "Sony Ten 1",
    "logo": "https://tvassets.roarzone.info/images/20.png",
    "category": "Sports",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-ten-1"
  },
  {
    "id": "star-plus",
    "name": "Star Plus",
    "logo": "https://tvassets.roarzone.info/images/67.png",
    "category": "Hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=star-plus"
  },
  {
    "id": "discovery-hd",
    "name": "Discovery HD",
    "logo": "https://tvassets.roarzone.info/images/43.png",
    "category": "Documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=discovery-hd"
  },
  {
    "id": "star-jalsha",
    "name": "Star Jalsha",
    "logo": "https://tvassets.roarzone.info/images/30.png",
    "category": "Bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=star-jalsha"
  },
  {
    "id": "cartoon-network",
    "name": "Cartoon Network",
    "logo": "https://tvassets.roarzone.info/images/79.png",
    "category": "Kids",
    "url": "https://biostar-tv-world.vercel.app/?id=cartoon-network"
  }
  // ... বাকি চ্যানেলগুলো একইভাবে যোগ করুন
];

let currentChannelIndex = 0;
let player = null;

// প্লেয়ার লোড করার ফাংশন
function loadChannel(channel) {
  if (player) {
    player.destroy();
  }

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
      preload: 'auto',
      playback: {
        playInline: true,
      }
    });
    playerContainer.style.opacity = 1;
  }, 300);
}

// চ্যানেল লিস্ট রেন্ডার করা
function renderChannelList(channelArray = channels) {
  const list = document.getElementById("channelList");
  list.innerHTML = '';

  if (channelArray.length === 0) {
    list.innerHTML = '<p style="text-align: center; color: #888; padding: 20px;">কোনো চ্যানেল পাওয়া যায়নি</p>';
    return;
  }

  channelArray.forEach((channel) => {
    const li = document.createElement("li");
    li.className = "channel-item";
    li.innerHTML = `
      <img src="${channel.logo}" onerror="this.src='https://via.placeholder.com/40?text=TV'" alt="${channel.name}">
      <div class="channel-info">
        <span class="name">${channel.name}</span>
        <span class="category">${channel.category}</span>
      </div>
    `;
    li.onclick = () => {
      currentChannelIndex = channels.findIndex(c => c.id === channel.id);
      loadChannel(channel);
      // মোবাইল ডিভাইসে ক্লিক করার পর লিস্ট স্ক্রল করে উপরে তোলা বা হাইড করার কোড এখানে দিতে পারেন
    };
    list.appendChild(li);
  });
}

// সার্চ ফাংশন
function searchChannels() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filtered = channels.filter(channel => 
    channel.name.toLowerCase().includes(searchTerm) || 
    channel.category.toLowerCase().includes(searchTerm)
  );
  renderChannelList(filtered);
}

// নেক্সট এবং প্রিভিয়াস চ্যানেল
function nextChannel() {
  currentChannelIndex = (currentChannelIndex + 1) % channels.length;
  loadChannel(channels[currentChannelIndex]);
}

function prevChannel() {
  currentChannelIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
  loadChannel(channels[currentChannelIndex]);
}

// কিবোর্ড কন্ট্রোল
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextChannel();
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevChannel();
});

// ইনিশিয়াল লোড
window.onload = () => {
  renderChannelList();
  if (channels.length > 0) {
    loadChannel(channels[currentChannelIndex]);
  }
};
