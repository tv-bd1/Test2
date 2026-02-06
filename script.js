const channels = [
  {
    "id": "2026",
    "name": "2026)",
    "logo": "https://www.fancode.com/skillup-uploads/cms-media/140086_5928_RLS_DW_FC-Web_1769807667662.jpg",
    "category": "Fancode",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8"
  },
  {
    "id": "btv",
    "name": "BTV",
    "logo": "https://i.postimg.cc/JnWdHSrq/20250529-071604.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=btv"
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
    "id": "waz-tv",
    "name": "WAZ TV",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTac9Sb94wTWnSqTakCWhjrwJKEnudAfl337w&s",
    "category": "Islamic",
    "url": "https://biostar-tv-world.vercel.app/?id=waz-tv"
  },
  {
    "id": "azan-tv",
    "name": "Azan TV",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPU_idVchUr-IGT6csSe94IJYOYZafaEr4Dg&s",
    "category": "Islamic",
    "url": "https://biostar-tv-world.vercel.app/?id=azan-tv"
  },
  {
    "id": "somoy-tv",
    "name": "Somoy TV",
    "logo": "https://i.postimg.cc/Qxn4JFNV/20250529-071147.png",
    "category": "News",
    "url": "https://biostar-tv-world.vercel.app/?id=somoy-tv"
  },
  {
    "id": "channel-24",
    "name": "Channel 24",
    "logo": "https://i.postimg.cc/nLmPznJr/20250529-071852.png",
    "category": "News",
    "url": "https://biostar-tv-world.vercel.app/?id=channel-24"
  },
  {
    "id": "sami-tv-hd",
    "name": "Sami TV HD",
    "logo": "https://thebengalee.com/wp-content/uploads/2026/01/photo_2026-01-14_19-08-37-1-300x300.webp",
    "category": "Bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=sami-tv-hd"
  },
  {
    "id": "asian-tv",
    "name": "Asian TV",
    "logo": "https://s3.aynaott.com/storage/5282cec3a2e9349b750540d658cf1b6c",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=asian-tv"
  },
  {
    "id": "sa-tv",
    "name": "SA TV",
    "logo": "https://s3.aynaott.com/storage/f710d2ff532cb7e7b75566232c5b72d3",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=sa-tv"
  },
  {
    "id": "nagorik",
    "name": "Nagorik",
    "logo": "https://i.postimg.cc/8zQ0DYBH/20250720_201346.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=nagorik"
  },
  {
    "id": "ekattor",
    "name": "Ekattor",
    "logo": "https://i.postimg.cc/D0xCDZqj/20250529-071258.png",
    "category": "News",
    "url": "https://biostar-tv-world.vercel.app/?id=ekattor"
  },
  {
    "id": "ntv",
    "name": "NTV",
    "logo": "https://i.postimg.cc/kgzHqBLL/20250529-072107.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=ntv"
  },
  {
    "id": "srk-tv",
    "name": "Srk Tv",
    "logo": "https://asset.bioscopelive.com/uploads/images/2025/08/11/thumbnail_backgrounds_01b5b56aa2e80823f23cc9d708141d1a_goplay_srk_tv_landscape.jpg?w=1600&q=75",
    "category": "Bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=srk-tv"
  },
  {
    "id": "bangla-tv",
    "name": "Bangla tv",
    "logo": "http://tvassets.roarzone.info/images/19.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=bangla-tv"
  },
  {
    "id": "mohona-tv-hd",
    "name": "MOHONA TV HD",
    "logo": "https://i.ibb.co.com/1JMhnC3G/MOHONA-TV-HD.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=mohona-tv-hd"
  },
  {
    "id": "atn-bangla",
    "name": "ATN Bangla",
    "logo": "https://i.postimg.cc/FHBMzPkW/20250529-102502.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=atn-bangla"
  },
  {
    "id": "anando-tv",
    "name": "Anando TV",
    "logo": "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Anonoda%20Tv.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=anando-tv"
  },
  {
    "id": "channel-i",
    "name": "Channel i",
    "logo": "https://i.postimg.cc/J47vqwbY/20250529-101717.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=channel-i"
  },
  {
    "id": "green-tv",
    "name": "Green TV",
    "logo": "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Green%20TV.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=green-tv"
  },
  {
    "id": "gtv",
    "name": "GTV",
    "logo": "https://i.postimg.cc/jjKGfnW8/20250704_201040.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=gtv"
  },
  {
    "id": "channel-s-hd",
    "name": "Channel S HD",
    "logo": "https://i.ibb.co/QmPPKgg/20240826-231747.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=channel-s-hd"
  },
  {
    "id": "ekhon-tv",
    "name": "Ekhon TV",
    "logo": "https://i.postimg.cc/sggzvQ6X/20250529-105045.png",
    "category": "news",
    "url": "https://biostar-tv-world.vercel.app/?id=ekhon-tv"
  },
  {
    "id": "t-sports-hd",
    "name": "T Sports HD",
    "logo": "https://i.postimg.cc/VL5yTtwr/20250707_141739.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=t-sports-hd"
  },
  {
    "id": "speed-sports-1",
    "name": "speed sports 1",
    "logo": "https://s3.aynaott.com/storage/06f5b193bfa4d31310ee934eb3c2222e",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=speed-sports-1"
  },
  {
    "id": "cricket-gold-old",
    "name": "Cricket Gold  Old",
    "logo": "https://www.cricexec.com/wp-content/uploads/2025/10/cricket-gold-logo-2025-300x169.webp",
    "category": "Others",
    "url": "https://biostar-tv-world.vercel.app/?id=cricket-gold-old"
  },
  {
    "id": "trace-sports",
    "name": "Trace Sports",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Logo_TRACE_Sports.svg/1280px-Logo_TRACE_Sports.svg.png?20210718024940",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=trace-sports"
  },
  {
    "id": "tennis-channel",
    "name": "Tennis Channel",
    "logo": "https://i.ibb.co.com/HT0W29vz/Tennis-Channel.jpg",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=tennis-channel"
  },
  {
    "id": "pro-sports-international",
    "name": "Pro Sports International",
    "logo": "https://s3.aynaott.com/storage/370762bb5582389fb52469931cdcd357",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=pro-sports-international"
  },
  {
    "id": "wof-1",
    "name": "WOF 1",
    "logo": "https://s3.aynaott.com/storage/1a580ee2636a0c4761e623bc131ba7a6",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=wof-1"
  },
  {
    "id": "sharjah-sports-tv",
    "name": "Sharjah Sports TV",
    "logo": "https://s3.aynaott.com/storage/1f08174ace89c73d3d4d8b72dd4601a4",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=sharjah-sports-tv"
  },
  {
    "id": "nbc-sports",
    "name": "NBC Sports",
    "logo": "https://s3.aynaott.com/storage/0a241a80bf51d2c3b3722531706ce086",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=nbc-sports"
  },
  {
    "id": "dd-sports",
    "name": "DD Sports",
    "logo": "https://s3.aynaott.com/storage/188500190395c4de0e506d518925dcc4",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=dd-sports"
  },
  {
    "id": "a-sports",
    "name": "A sports",
    "logo": "https://s3.aynaott.com/storage/64de30d2df9b2a888cb73f17614a9a8b",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=a-sports"
  },
  {
    "id": "bahrain-sports-1",
    "name": "Bahrain Sports 1",
    "logo": "https://s3.aynaott.com/storage/f55bea3263be1af187fe1122e4f44142",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bahrain-sports-1"
  },
  {
    "id": "abu-dhabi-sports-2",
    "name": "Abu Dhabi Sports 2",
    "logo": "https://s3.aynaott.com/storage/e2f09b3c7415180f248438ef9688846a",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=abu-dhabi-sports-2"
  },
  {
    "id": "abu-dhabi-sports-1",
    "name": "Abu Dhabi Sports 1",
    "logo": "https://s3.aynaott.com/storage/4a49a25eebddb4b8ad8e59298dd2040c",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=abu-dhabi-sports-1"
  },
  {
    "id": "sports-first-tv",
    "name": "SPORTS FIRST TV",
    "logo": "https://s3.aynaott.com/storage/748d28752dcf95740561f1ac39e15fc3",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=sports-first-tv"
  },
  {
    "id": "rta-sports",
    "name": "Rta sports",
    "logo": "https://s3.aynaott.com/storage/ce9f61273938b15fd5372f1071ecfec5",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=rta-sports"
  },
  {
    "id": "solhsports",
    "name": "Solhsports",
    "logo": "https://i.ibb.co.com/pBJSjXTc/download.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=solhsports"
  },
  {
    "id": "persiana-sports",
    "name": "Persiana Sports",
    "logo": "https://s3.aynaott.com/storage/3f1f920559925d7504151bceb69c3d19",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=persiana-sports"
  },
  {
    "id": "bein-sports-1",
    "name": "BEIN SPORTS 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Logo_bein_sports_1.png/1280px-Logo_bein_sports_1.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-1"
  },
  {
    "id": "bein-sports-2",
    "name": "BEIN SPORTS 2",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_bein_sports_2.png/1280px-Logo_bein_sports_2.png?20170228135704",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-2"
  },
  {
    "id": "bein-sports-3",
    "name": "BEIN SPORTS 3",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Logo_bein_sports_3.png/1280px-Logo_bein_sports_3.png?20170228140009",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-3"
  },
  {
    "id": "bein-sports-4",
    "name": "BEIN SPORTS 4",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Logo_bein_sports_4.png/1280px-Logo_bein_sports_4.png?20170228140245",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-4"
  },
  {
    "id": "bein-sports-5",
    "name": "BEIN SPORTS 5",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_BeinSports_5_MAX.svg/1280px-Logo_BeinSports_5_MAX.svg.png?20220526175413",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-5"
  },
  {
    "id": "bein-sports-6",
    "name": "BEIN SPORTS 6",
    "logo": "https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch646_170_122",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-6"
  },
  {
    "id": "bein-sports-7",
    "name": "BEIN SPORTS 7",
    "logo": "https://satellitesolutions.com/wp-content/uploads/2023/09/BEIN7.png.webp",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-7"
  },
  {
    "id": "bein-sports-8",
    "name": "BEIN SPORTS 8",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Logo-Beinsports-8MAX.png/1280px-Logo-Beinsports-8MAX.png?20230108213724",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-8"
  },
  {
    "id": "bein-sports-9",
    "name": "BEIN SPORTS 9",
    "logo": "https://proxymedia.woopic.com/api/v1/images/1618%2Fedithor%2Fboutique-tv%2Fbeinsports_9_max_6704d1e6a94efd791ea7a0c6.png?format=362x263&saveas=png&saveasquality=85",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=bein-sports-9"
  },
  {
    "id": "t-sports",
    "name": "T Sports",
    "logo": "https://tvassets.roarzone.info/images/102.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=t-sports"
  },
  {
    "id": "star-sports-1",
    "name": "Star Sports 1",
    "logo": "https://tvassets.roarzone.info/images/25.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=star-sports-1"
  },
  {
    "id": "star-sports-2",
    "name": "Star Sports 2",
    "logo": "https://tvassets.roarzone.info/images/26.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=star-sports-2"
  },
  {
    "id": "sony-ten-1",
    "name": "Sony Ten 1",
    "logo": "https://tvassets.roarzone.info/images/20.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-ten-1"
  },
  {
    "id": "sony-ten-2",
    "name": "Sony Ten 2",
    "logo": "https://tvassets.roarzone.info/images/21.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-ten-2"
  },
  {
    "id": "sony-ten-3",
    "name": "Sony Ten 3",
    "logo": "https://tvassets.roarzone.info/images/22.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-ten-3"
  },
  {
    "id": "sony-six",
    "name": "Sony SIX",
    "logo": "https://tvassets.roarzone.info/images/24.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-six"
  },
  {
    "id": "star-sports-select-1",
    "name": "Star Sports Select 1",
    "logo": "https://tvassets.roarzone.info/images/27.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=star-sports-select-1"
  },
  {
    "id": "star-sports-select-2",
    "name": "Star Sports Select 2",
    "logo": "https://tvassets.roarzone.info/images/28.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=star-sports-select-2"
  },
  {
    "id": "euro-sports",
    "name": "Euro Sports",
    "logo": "https://tvassets.roarzone.info/images/euro_sports_hd.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=euro-sports"
  },
  {
    "id": "dubai-sports",
    "name": "Dubai Sports",
    "logo": "https://tvassets.roarzone.info/images/dubai-sports.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=dubai-sports"
  },
  {
    "id": "ten-cricket",
    "name": "Ten Cricket",
    "logo": "https://tvassets.roarzone.info/images/ten_cricket.png",
    "category": "sports",
    "url": "https://biostar-tv-world.vercel.app/?id=ten-cricket"
  },
  {
    "id": "star-gold-select",
    "name": "Star Gold Select",
    "logo": "https://tvassets.roarzone.info/images/75.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=star-gold-select"
  },
  {
    "id": "sony-tv",
    "name": "Sony TV",
    "logo": "https://tvassets.roarzone.info/images/38.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-tv"
  },
  {
    "id": "sony-max",
    "name": "Sony Max",
    "logo": "https://tvassets.roarzone.info/images/sonymax.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-max"
  },
  {
    "id": "sony-max-hd",
    "name": "Sony Max HD",
    "logo": "https://tvassets.roarzone.info/images/sonymaxhd.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-max-hd"
  },
  {
    "id": "colors",
    "name": "Colors",
    "logo": "https://tvassets.roarzone.info/images/68.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=colors"
  },
  {
    "id": "sony-max-2",
    "name": "Sony Max 2",
    "logo": "https://tvassets.roarzone.info/images/sonymax2.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-max-2"
  },
  {
    "id": "zee-tv",
    "name": "ZEE TV",
    "logo": "https://tvassets.roarzone.info/images/40.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=zee-tv"
  },
  {
    "id": "zee-cinema",
    "name": "Zee Cinema",
    "logo": "https://tvassets.roarzone.info/images/76.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=zee-cinema"
  },
  {
    "id": "zee-bollywood",
    "name": "ZEE Bollywood",
    "logo": "https://tvassets.roarzone.info/images/94.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=zee-bollywood"
  },
  {
    "id": "zee-action",
    "name": "Zee Action",
    "logo": "https://tvassets.roarzone.info/images/90.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=zee-action"
  },
  {
    "id": "star-plus",
    "name": "Star Plus",
    "logo": "https://tvassets.roarzone.info/images/67.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=star-plus"
  },
  {
    "id": "and-tv-hd",
    "name": "And TV HD",
    "logo": "https://tvassets.roarzone.info/images/74.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=and-tv-hd"
  },
  {
    "id": "and-pictures",
    "name": "And Pictures",
    "logo": "https://tvassets.roarzone.info/images/100.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=and-pictures"
  },
  {
    "id": "hum-tv",
    "name": "Hum TV",
    "logo": "https://tvassets.roarzone.info/images/humtv.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=hum-tv"
  },
  {
    "id": "zee-anmol",
    "name": "zee-anmol",
    "logo": "https://tvassets.roarzone.info/images/zee-anmol.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=zee-anmol"
  },
  {
    "id": "hum-masala",
    "name": "Hum Masala",
    "logo": "https://tvassets.roarzone.info/images/hummasala.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=hum-masala"
  },
  {
    "id": "hum-sitarey",
    "name": "Hum Sitarey",
    "logo": "https://tvassets.roarzone.info/images/humsitarey.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=hum-sitarey"
  },
  {
    "id": "b4u-movies",
    "name": "B4U Movies",
    "logo": "https://tvassets.roarzone.info/images/b4umovies.png",
    "category": "hindi",
    "url": "https://biostar-tv-world.vercel.app/?id=b4u-movies"
  },
  {
    "id": "discovery-hd",
    "name": "Discovery HD",
    "logo": "https://tvassets.roarzone.info/images/43.png",
    "category": "documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=discovery-hd"
  },
  {
    "id": "discovery-science",
    "name": "Discovery Science",
    "logo": "https://tvassets.roarzone.info/images/discoveryscience.png",
    "category": "documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=discovery-science"
  },
  {
    "id": "discovery-turbo",
    "name": "Discovery Turbo",
    "logo": "https://tvassets.roarzone.info/images/discoveryturbo.png",
    "category": "documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=discovery-turbo"
  },
  {
    "id": "discovery-hd-investigation",
    "name": "Discovery HD Investigation",
    "logo": "https://tvassets.roarzone.info/images/discoveryhdInvestigation.png",
    "category": "documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=discovery-hd-investigation"
  },
  {
    "id": "cnn",
    "name": "cnn",
    "logo": "https://tvassets.roarzone.info/images/cnn.png",
    "category": "documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=cnn"
  },
  {
    "id": "sony-bbc-earth-hd",
    "name": "Sony BBC Earth HD",
    "logo": "https://tvassets.roarzone.info/images/44.png",
    "category": "documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-bbc-earth-hd"
  },
  {
    "id": "natgeo",
    "name": "Natgeo",
    "logo": "https://tvassets.roarzone.info/images/35.png",
    "category": "documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=natgeo"
  },
  {
    "id": "animal-planet",
    "name": "Animal Planet",
    "logo": "https://tvassets.roarzone.info/images/animalplanet.png",
    "category": "documentary",
    "url": "https://biostar-tv-world.vercel.app/?id=animal-planet"
  },
  {
    "id": "star-jalsha",
    "name": "Star Jalsha",
    "logo": "https://tvassets.roarzone.info/images/30.png",
    "category": "inbangla",
    "url": "https://biostar-tv-world.vercel.app/?id=star-jalsha"
  },
  {
    "id": "star-jalsha-movies",
    "name": "Star Jalsha Movies",
    "logo": "https://tvassets.roarzone.info/images/31.png",
    "category": "inbangla",
    "url": "https://biostar-tv-world.vercel.app/?id=star-jalsha-movies"
  },
  {
    "id": "zee-bangla",
    "name": "Zee Bangla",
    "logo": "https://tvassets.roarzone.info/images/34.png",
    "category": "inbangla",
    "url": "https://biostar-tv-world.vercel.app/?id=zee-bangla"
  },
  {
    "id": "zee-bangla-cinema",
    "name": "ZEE Bangla Cinema",
    "logo": "https://tvassets.roarzone.info/images/29.png",
    "category": "inbangla",
    "url": "https://biostar-tv-world.vercel.app/?id=zee-bangla-cinema"
  },
  {
    "id": "colors-bangla",
    "name": "Colors Bangla",
    "logo": "https://tvassets.roarzone.info/images/66.png",
    "category": "inbangla",
    "url": "https://biostar-tv-world.vercel.app/?id=colors-bangla"
  },
  {
    "id": "sony-aath",
    "name": "Sony Aath",
    "logo": "https://tvassets.roarzone.info/images/33.png",
    "category": "inbangla",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-aath"
  },
  {
    "id": "cartoon-network",
    "name": "Cartoon Network",
    "logo": "https://tvassets.roarzone.info/images/79.png",
    "category": "kids",
    "url": "https://biostar-tv-world.vercel.app/?id=cartoon-network"
  },
  {
    "id": "nick",
    "name": "Nick",
    "logo": "https://tvassets.roarzone.info/images/55.png",
    "category": "kids",
    "url": "https://biostar-tv-world.vercel.app/?id=nick"
  },
  {
    "id": "pogo",
    "name": "POGO",
    "logo": "https://tvassets.roarzone.info/images/pogo.png",
    "category": "kids",
    "url": "https://biostar-tv-world.vercel.app/?id=pogo"
  },
  {
    "id": "discovery-kids",
    "name": "Discovery Kids",
    "logo": "https://tvassets.roarzone.info/images/discoverykids.png",
    "category": "kids",
    "url": "https://biostar-tv-world.vercel.app/?id=discovery-kids"
  },
  {
    "id": "sony-yay",
    "name": "Sony Yay",
    "logo": "https://tvassets.roarzone.info/images/sonyyay.png",
    "category": "kids",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-yay"
  },
  {
    "id": "star-movies",
    "name": "Star Movies",
    "logo": "https://tvassets.roarzone.info/images/starmovies.png",
    "category": "english",
    "url": "https://biostar-tv-world.vercel.app/?id=star-movies"
  },
  {
    "id": "zee-cafe-hd",
    "name": "Zee Cafe HD",
    "logo": "https://tvassets.roarzone.info/images/69.png",
    "category": "english",
    "url": "https://biostar-tv-world.vercel.app/?id=zee-cafe-hd"
  },
  {
    "id": "sony-pix",
    "name": "Sony Pix",
    "logo": "https://tvassets.roarzone.info/images/41.png",
    "category": "english",
    "url": "https://biostar-tv-world.vercel.app/?id=sony-pix"
  },
  {
    "id": "dw-news",
    "name": "DW NEWS",
    "logo": "https://tvassets.roarzone.info/images/85.png",
    "category": "english",
    "url": "https://biostar-tv-world.vercel.app/?id=dw-news"
  },
  {
    "id": "al-jazeera",
    "name": "Al Jazeera",
    "logo": "https://tvassets.roarzone.info/images/89.png",
    "category": "english",
    "url": "https://biostar-tv-world.vercel.app/?id=al-jazeera"
  },
  {
    "id": "gaan-bangla",
    "name": "Gaan Bangla",
    "logo": "https://tvassets.roarzone.info/images/58.png",
    "category": "music",
    "url": "https://biostar-tv-world.vercel.app/?id=gaan-bangla"
  },
  {
    "id": "9xm",
    "name": "9xM",
    "logo": "https://tvassets.roarzone.info/images/48.png",
    "category": "music",
    "url": "https://biostar-tv-world.vercel.app/?id=9xm"
  },
  {
    "id": "zing",
    "name": "ZING",
    "logo": "https://tvassets.roarzone.info/images/93.png",
    "category": "music",
    "url": "https://biostar-tv-world.vercel.app/?id=zing"
  },
  {
    "id": "b4u-music",
    "name": "B4U Music",
    "logo": "https://tvassets.roarzone.info/images/b4umusic.png",
    "category": "music",
    "url": "https://biostar-tv-world.vercel.app/?id=b4u-music"
  },
  {
    "id": "nagorik-tv",
    "name": "Nagorik TV",
    "logo": "https://tvassets.roarzone.info/images/59.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=nagorik-tv"
  },
  {
    "id": "ekushy-tv",
    "name": "Ekushy TV",
    "logo": "https://tvassets.roarzone.info/images/65.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=ekushy-tv"
  },
  {
    "id": "atn-news",
    "name": "ATN NEWS",
    "logo": "https://tvassets.roarzone.info/images/49.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=atn-news"
  },
  {
    "id": "banglavision-tv",
    "name": "Banglavision TV",
    "logo": "https://tvassets.roarzone.info/images/3.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=banglavision-tv"
  },
  {
    "id": "boishakhi-tv",
    "name": "Boishakhi TV",
    "logo": "https://tvassets.roarzone.info/images/61.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=boishakhi-tv"
  },
  {
    "id": "btv-world",
    "name": "BTV World",
    "logo": "https://tvassets.roarzone.info/images/84.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=btv-world"
  },
  {
    "id": "channel-9",
    "name": "Channel 9",
    "logo": "https://tvassets.roarzone.info/images/4.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=channel-9"
  },
  {
    "id": "dbc-news",
    "name": "DBC News",
    "logo": "https://tvassets.roarzone.info/images/7.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=dbc-news"
  },
  {
    "id": "ekattor-tv",
    "name": "Ekattor TV",
    "logo": "https://tvassets.roarzone.info/images/11.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=ekattor-tv"
  },
  {
    "id": "deepto-tv",
    "name": "Deepto TV",
    "logo": "https://tvassets.roarzone.info/images/8.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=deepto-tv"
  },
  {
    "id": "desh-tv",
    "name": "Desh TV",
    "logo": "https://tvassets.roarzone.info/images/9.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=desh-tv"
  },
  {
    "id": "duronto-tv",
    "name": "Duronto TV",
    "logo": "https://tvassets.roarzone.info/images/10.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=duronto-tv"
  },
  {
    "id": "independent-tv",
    "name": "Independent TV",
    "logo": "https://tvassets.roarzone.info/images/12.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=independent-tv"
  },
  {
    "id": "maasranga",
    "name": "Maasranga",
    "logo": "https://tvassets.roarzone.info/images/51.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=maasranga"
  },
  {
    "id": "mohona-tv",
    "name": "Mohona TV",
    "logo": "https://tvassets.roarzone.info/images/50.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=mohona-tv"
  },
  {
    "id": "movie-bangla-tv",
    "name": "Movie Bangla TV",
    "logo": "https://tvassets.roarzone.info/images/86.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=movie-bangla-tv"
  },
  {
    "id": "my-tv",
    "name": "MY TV",
    "logo": "https://tvassets.roarzone.info/images/56.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=my-tv"
  },
  {
    "id": "news24",
    "name": "News24",
    "logo": "https://tvassets.roarzone.info/images/18.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=news24"
  },
  {
    "id": "rtv",
    "name": "RTV",
    "logo": "https://tvassets.roarzone.info/images/14.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=rtv"
  },
  {
    "id": "sangsad-tv",
    "name": "Sangsad TV",
    "logo": "https://tvassets.roarzone.info/images/88.png",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=sangsad-tv"
  },
  {
    "id": "ekhon",
    "name": "ekhon",
    "logo": "https://tvassets.roarzone.info/images/ekhon-tv.jpg",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=ekhon"
  },
  {
    "id": "bijoy-tv",
    "name": "bijoy-tv",
    "logo": "https://tvassets.roarzone.info/images/bijoy-tv.jpg",
    "category": "bangla",
    "url": "https://biostar-tv-world.vercel.app/?id=bijoy-tv"
    
  }
];

let currentChannel = 0;
let player = null;
let displayedChannels = [...channels]; // সার্চের সময় এটি আপডেট হবে

function loadChannel(channel) {
  if (player) {
    player.destroy();
  }

  const playerContainer = document.getElementById("player");
  playerContainer.style.opacity = 0;

  // Clappr প্লেয়ার সেটআপ
  setTimeout(() => {
    player = new Clappr.Player({
      source: channel.url,
      parentId: "#player",
      width: "100%",
      height: "100%",
      autoPlay: true,
      mute: false,
      // লোডিং ইরর হ্যান্ডেল করার জন্য
      events: {
        onError: function(e) {
          console.error("চ্যানেল লোড হতে সমস্যা হচ্ছে:", e);
        }
      }
    });
    playerContainer.style.opacity = 1;
  }, 300);
}

function renderChannelList(channelArray = channels) {
  const list = document.getElementById("channelList");
  list.innerHTML = '';
  
  displayedChannels = channelArray; // বর্তমানে প্রদর্শিত লিস্ট আপডেট রাখা

  if (channelArray.length === 0) {
    list.innerHTML = '<p style="text-align: center; color: #888;">কোনো চ্যানেল পাওয়া যায়নি।</p>';
    return;
  }

  channelArray.forEach((channel, index) => {
    const li = document.createElement("li");
    // একটি 'active' ক্লাস যোগ করা যেতে পারে বর্তমান চ্যানেলের জন্য
    li.className = (channels[currentChannel].id === channel.id) ? "active" : "";
    li.innerHTML = `<img src="${channel.logo}" alt="${channel.name}" onerror="this.src='default-logo.png'"> ${channel.name}`;
    
    li.onclick = () => {
      currentChannel = channels.findIndex(c => c.id === channel.id);
      loadChannel(channel);
      renderChannelList(displayedChannels); // হাইলাইট আপডেট করতে পুনরায় রেন্ডার
    };
    list.appendChild(li);
  });
}

function searchChannels() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filtered = channels.filter(channel => 
    channel.name.toLowerCase().includes(searchTerm) || 
    channel.category.toLowerCase().includes(searchTerm)
  );
  renderChannelList(filtered);
}

function nextChannel() {
  if (channels.length === 0) return;
  currentChannel = (currentChannel + 1) % channels.length;
  loadChannel(channels[currentChannel]);
  renderChannelList(displayedChannels);
}

function prevChannel() {
  if (channels.length === 0) return;
  currentChannel = (currentChannel - 1 + channels.length) % channels.length;
  loadChannel(channels[currentChannel]);
  renderChannelList(displayedChannels);
}

// ইনিশিয়ালাইজেশন
document.addEventListener('DOMContentLoaded', () => {
  renderChannelList();
  if (channels.length > 0) {
    loadChannel(channels[currentChannel]);
  }
});

// কিবোর্ড নেভিগেশন
document.addEventListener('keydown', (event) => {
  if (event.target.tagName === 'INPUT') return; // সার্চ বক্সে টাইপ করার সময় চ্যানেল বদলাবে না
  
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    prevChannel();
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    nextChannel();
  }
});
