let channels = [];

async function fetchM3U(url) {
    try {
        // GitHub direct block এড়াতে AllOrigins proxy ব্যবহার করা
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const result = await response.json();
        const rawData = result.contents;

        if (!rawData) throw new Error("No data found");

        parseM3U(rawData);
    } catch (error) {
        console.error("M3U fetch error:", error);
    }
}

function parseM3U(data) {
    const lines = data.split('\n');
    channels = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('#EXTINF:')) {
            // চ্যানেল নাম
            const name = line.split(',')[1] || "Unknown Channel";

            // চ্যানেল লোগো
            const logoMatch = line.match(/tvg-logo="([^"]+)"/);
            const logo = logoMatch ? logoMatch[1] : 'https://via.placeholder.com/40';

            // স্ট্রিম URL (পরবর্তী ২ লাইনে খুঁজবে)
            let url = "";
            for (let j = i + 1; j <= i + 2; j++) {
                if (lines[j] && lines[j].trim().startsWith('http')) {
                    url = lines[j].trim();
                    break;
                }
            }

            if (url) {
                channels.push({ name, logo, url });
            }
        }
    }

    console.log("চ্যানেল লিস্ট:", channels);
}

// ব্যবহার:
fetchM3U('https://raw.githubusercontent.com/tvbd/m3uplayer/refs/heads/main/m3u/nexgen.m3u');
