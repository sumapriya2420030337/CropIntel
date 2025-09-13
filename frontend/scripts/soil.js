const SOIL_API = "http://localhost:5000/api/soil";

async function analyzeSoil() {
  const ph = document.getElementById("ph").value;
  const nitrogen = document.getElementById("nitrogen").value;
  const phosphorus = document.getElementById("phosphorus").value;
  const potassium = document.getElementById("potassium").value;

  const res = await fetch(SOIL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ph, nitrogen, phosphorus, potassium })
  });

  const data = await res.json();

  document.getElementById("soilResult").innerHTML = `
    <h3>Soil Report</h3>
    <p>pH: ${data.ph}</p>
    <p>Nitrogen: ${data.nitrogen}</p>
    <p>Phosphorus: ${data.phosphorus}</p>
    <p>Potassium: ${data.potassium}</p>
    <h4>Recommended Crops: ${data.recommended.join(", ")}</h4>
  `;
}
