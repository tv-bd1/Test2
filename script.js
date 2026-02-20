// আপনার চ্যানেল ডাটা এখানে থাকবে...
const channels = [
  {
    "id": "2026",
    "name": "Fancode 2026",
    "logo": "https://www.fancode.com/skillup-uploads/cms-media/140086_5928_RLS_DW_FC-Web_1769807667662.jpg",
    "category": "Sports",
    "url": "https://biostar-tv-world.vercel.app/?id=2026"
  },
  // বাকি সব চ্যানেল...
];

let currentChannelIndex = 0;

function loadChannel(channel) {
  const playerContainer = document.getElementById("player");
  
  // অ্যানিমেশনের জন্য অপাসিটি কমানো
  playerContainer.style.opacity = 0;

  setTimeout(() => {
    // Clappr এর বদলে Iframe ব্যবহার করছি কারণ আপনার লিঙ্কগুলো ওয়েব পেজ
    playerContainer.innerHTML = `
      <iframe 
        src="${channel.url}" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
      </iframe>`;
    
    playerContainer.style.opacity = 1;
  }, 300);
}

// চ্যানেল লিস্ট রেন্ডার করা
function renderChannelList(channelArray = channels) {
  const list = document.getElementById("channelList");
  list.innerHTML = '';

  channelArray.forEach((channel) => {
    const li = document.createElement("li");
    li.className = "channel-item";
    li.innerHTML = `
      <img src="${channel.logo}" onerror="this.src='https://via.placeholder.com/40?text=TV'" alt="">
      <div class="channel-info">
        <span class="name">${channel.name}</span>
      </div>
    `;
    li.onclick = () => {
      currentChannelIndex = channels.findIndex(c => c.id === channel.id);
      loadChannel(channel);
    };
    list.appendChild(li);
  });
}

// নেক্সট এবং প্রিভিয়াস ফাংশন
function nextChannel() {
  currentChannelIndex = (currentChannelIndex + 1) % channels.length;
  loadChannel(channels[currentChannelIndex]);
}

function prevChannel() {
  currentChannelIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
  loadChannel(channels[currentChannelIndex]);
}

// সার্চ ফাংশন
function searchChannels() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filtered = channels.filter(channel => 
    channel.name.toLowerCase().includes(searchTerm)
  );
  renderChannelList(filtered);
}

// প্রাথমিক লোড
window.onload = () => {
  renderChannelList();
  if (channels.length > 0) {
    loadChannel(channels[currentChannelIndex]);
  }
};
