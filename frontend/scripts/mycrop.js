const API_URL = "http://localhost:5000/api/crops";

async function addCrop() {
  const name = document.getElementById("cropName").value;
  const area = document.getElementById("cropArea").value;

  if (!name || !area) return alert("Please enter crop details");

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, area })
  });

  loadCrops();
}

async function loadCrops() {
  const res = await fetch(API_URL);
  const crops = await res.json();

  document.getElementById("cropList").innerHTML = crops.map(crop => `
    <div class="card">
      <h3>${crop.name}</h3>
      <p>🌾 Area: ${crop.area} acres</p>
    </div>
  `).join("");
}

loadCrops();
