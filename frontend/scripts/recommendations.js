const REC_API = "http://localhost:5000/api/recommendations";

async function loadRecommendations() {
  const res = await fetch(REC_API);
  const recs = await res.json();

  document.getElementById("recommendList").innerHTML = recs.map(crop => `
    <div class="card">
      <h3>${crop.name}</h3>
      <p>🌡 Best Season: ${crop.season}</p>
      <p>🌱 Soil Type: ${crop.soil}</p>
    </div>
  `).join("");
}

loadRecommendations();
