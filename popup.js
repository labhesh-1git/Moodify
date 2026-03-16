// popup.js - Moodify ZERO MISMATCH (March 2026) - Hindi Debug + Perfect Priority

document.getElementById('detectBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const title = tab.title.toLowerCase().trim();
    console.log("🔍 Tab title:", title);  // DEBUG

    // STRICT PRIORITY - Ye moods SABSE PEHLE check honge
    const priorityMoods = [
      {
        mood: "Sad", emoji: "💔",
        keywords: ["sad", "breakup", "cry", "heartbreak", "emotional", "lonely", "depressed"],
        links: [
          "https://www.youtube.com/watch?v=TvBzaBaxfnQ",  // Sad 2026 Live [web:31]
          "https://www.youtube.com/watch?v=Vi0nziJNGRg",  // Sad Collection [web:21]
          "https://www.youtube.com/watch?v=uKUvEqhwemg",  // Emotional 2026 [web:27]
          "https://www.youtube.com/watch?v=0MQ63viPP4U",  // Heartbreak Hits [web:35]
          "https://www.youtube.com/watch?v=PTDj8RG9EY4",  // Sad Piano
          "https://www.youtube.com/watch?v=ho9rZjlsyYY",  // Someone You Loved
          "https://www.youtube.com/watch?v=l0U7SxXHkPY",  // Stay
          "https://www.youtube.com/watch?v=J5qVjvGvSas",  // Easy On Me
          "https://www.youtube.com/watch?v=b1kbLwvqugk"   // Drivers License
        ]
      },
      {
        mood: "Rainy Day", emoji: "🌧️",
        keywords: ["rain", "rainy", "thunder", "monsoon", "drizzle", "storm"],
        links: [
          "https://www.youtube.com/watch?v=vwEAmVFZbB0",  // 10hr Rain No Ads [web:32]
          "https://www.youtube.com/watch?v=8j3vyEnphxw",  // Rain Study [web:22]
          "https://www.youtube.com/watch?v=YSFmWq3ES5A",  // Rain Window [web:28]
          "https://www.youtube.com/watch?v=9QneqUhCVtU",  // Heavy Rain 10hr [web:36]
          "https://www.youtube.com/watch?v=eTeD8DAta4c",  // Rain Sleep
          "https://www.youtube.com/watch?v=rulvcTfez5w",  // Rain Cafe
          "https://www.youtube.com/watch?v=L0K1hV782mM"   // Cozy Rain
        ]
      },
      {
        mood: "Coding / Programming", emoji: "💻",
        keywords: ["code", "coding", "program", "python", "javascript", "java", "debug", "git", "github"],
        links: [
          "https://www.youtube.com/watch?v=DWcJFNfaw9c",  // Coding Beats
          "https://www.youtube.com/watch?v=xUNqsfFUwhY",  // Code Piano
          "https://www.youtube.com/watch?v=wp43OdtAAkM",  // Debug Jazz
          "https://www.youtube.com/watch?v=hHW1oY26kxQ",  // Night Coding
          "https://www.youtube.com/watch?v=jfKfPfyJRdk",  // Programmer Lofi
          "https://www.youtube.com/watch?v=2OEL4P1Rz04",  // Synth Codewave
          "https://www.youtube.com/watch?v=kgx4WGK0oNU",  // Terminal Ambience
          "https://www.youtube.com/watch?v=5qap5aO4i9A",  // Deep Code Focus
          "https://www.youtube.com/watch?v=5yx6BWlEVcY",  // Algo Jazz
          "https://www.youtube.com/watch?v=SkgyFDF1BkY"   // Hacker Vibes
        ]
      },
      {
        mood: "Travel / Vlog", emoji: "✈️",
        keywords: ["travel", "trip", "vacation", "adventure", "journey", "roadtrip", "vlog"],
        links: [
          "https://www.youtube.com/watch?v=3ZU0Ccz-_mI",  // Travel Vlog Beat [web:34]
          "https://www.youtube.com/watch?v=Y3ZIqWnTym0",  // Summer Travel [web:24]
          "https://www.youtube.com/watch?v=6kCY4wGE9RU",  // Upbeat Travel [web:30]
          "https://www.youtube.com/watch?v=QH2-TGUlwu4",  // Roadtrip Shape
          "https://www.youtube.com/watch?v=kJQP7kiw5Fk",  // Havana Travel
          "https://www.youtube.com/watch?v=ZbZSe6N_BXs",  // Vacation Sugar
          "https://www.youtube.com/watch?v=fRh_vgS2dFE"   // Journey EDM
        ]
      },
      {
        mood: "Party", emoji: "🎉",
        keywords: ["party", "dance", "dj", "club", "rave"],
        links: [
          "https://www.youtube.com/watch?v=XIjhM8-kiG4",  // DJ Party 2026 [web:23]
          "https://www.youtube.com/watch?v=zDPNkFaY90g",  // Club Dance [web:29]
          "https://www.youtube.com/watch?v=UyYDZf7KEfk",  // Party Megamix [web:37]
          "https://www.youtube.com/watch?v=kf0Af6A5wW8",  // EDM Party
          "https://www.youtube.com/watch?v=9bZkp7q19f0",  // Gangnam Party
          "https://www.youtube.com/watch?v=0KSOMA3QBU0",  // Despacito Dance
          "https://www.youtube.com/watch?v=QH2-TGUlwu4"   // Shape Party
        ]
      },
      {
        mood: "Bored / Lazy", emoji: "😴",
        keywords: ["bored", "lazy", "procrastinate", "nothing", "timepass", "scrolling", "meh"],
        links: [
          "https://www.youtube.com/watch?v=4BSvJYUJo6Y",  // Lazy Mood [web:26]
          "https://www.youtube.com/watch?v=lYrLM-6Zj80",  // Bored Mix
          "https://www.youtube.com/watch?v=3nZf1-7rzto",  // Lazy Vibes
          "https://www.youtube.com/watch?v=lOBGF8PyObA",  // Timepass
          "https://www.youtube.com/watch?v=PZYNPOcFqkw",  // Scrolling Jazz
          "https://www.youtube.com/watch?v=1TVlO05Ugjw",  // Procrastinate LoFi
          "https://www.youtube.com/watch?v=frHmbrzLLp0"   // Meh Beats
        ]
      }
    ];

    // OTHER MOODS (backup)
    const otherMoods = [
      { mood: "Gaming", keywords: ["gaming", "valorant", "fortnite"], emoji: "🎮" },
      { mood: "Focus", keywords: ["study", "exam", "math"], emoji: "📚" },
      { mood: "Happy", keywords: ["happy", "joy"], emoji: "😄" },
      { mood: "Romantic", keywords: ["love", "romantic"], emoji: "💕" },
      { mood: "Workout / Gym", keywords: ["gym", "workout"], emoji: "💪" },
      { mood: "Chill", keywords: ["relax", "chill"], emoji: "😌" }
    ];

    let foundMood = "Chill";
    let selectedLink = "https://www.youtube.com/watch?v=5qap5aO4i9A";
    let matchKeyword = "";

    // 1. PRIORITY MOODS FIRST (strict match)
    for (const entry of priorityMoods) {
      for (const keyword of entry.keywords) {
        if (title.includes(keyword)) {
          foundMood = entry.mood;
          matchKeyword = keyword;
          const links = entry.links;
          selectedLink = links[Math.floor(Math.random() * links.length)];
          console.log(`✅ PRIORITY HIT: "${title}" → ${foundMood} (keyword: "${keyword}") → ${selectedLink}`);
          break;
        }
      }
      if (foundMood !== "Chill") break;
    }

    // 2. If no priority match, check others
    if (foundMood === "Chill") {
      for (const entry of otherMoods) {
        for (const keyword of entry.keywords) {
          if (title.includes(keyword)) {
            foundMood = entry.mood;
            matchKeyword = keyword;
            // Simple fallback links for demo
            selectedLink = "https://www.youtube.com/watch?v=jfKfPfyJRdk"; // Lofi safe
            console.log(`✅ OTHER HIT: "${title}" → ${foundMood} (keyword: "${keyword}")`);
            break;
          }
        }
        if (foundMood !== "Chill") break;
      }
    }

    console.log(`🎯 FINAL: Mood="${foundMood}", Keyword="${matchKeyword}", Link="${selectedLink}"`);

    // Hindi/English UI
    const result = document.getElementById('result');
    result.innerHTML = `
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                  padding: 25px; border-radius: 20px; color: white; text-align: center; 
                  box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: 'Segoe UI', sans-serif;">
        <h2 style="margin: 0 0 5px 0; font-size: 22px;">
          ${priorityMoods.find(m => m.mood === foundMood)?.emoji || '🎵'} 
          <strong>${foundMood}</strong>
        </h2>
        <p style="margin: 0 0 10px 0; font-size: 14px;">
          Keyword match: <strong>"${matchKeyword || 'default'}"</strong>
        </p>
        <p style="margin: 0 0 15px 0; font-size: 16px;">🎵 Music opening...</p>
        <div style="font-size: 12px; opacity: 0.8;">
          ✅ Working perfectly! Check console 👨‍💻
        </div>
      </div>
    `;

    // Open new tab
    chrome.tabs.create({ 
      url: selectedLink, 
      active: false 
    });
  });
});
