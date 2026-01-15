const container = document.getElementById("news-container");

fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.minecraft.net/en-us/feeds/community-content/rss")
  .then(r => r.json())
  .then(d => {
    d.items.slice(0,6).forEach(n => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <h3>${n.title}</h3>
        <p>${n.pubDate.split(" ")[0]}</p>
      `;
      container.appendChild(card);
    });
  });
