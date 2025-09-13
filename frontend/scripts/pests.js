const PEST_API = "http://localhost:5000/api/pests";

async function getPests() {
  const crop = document.getElementById("crop").value;
  if (!crop) return alert("Please enter a crop name");

  try {
    const res = await fetch(`${PEST_API}?crop=${crop}`);
    const pests = await res.json();

    if (!pests.length) {
      document.getElementById("pestList").innerHTML = `<div class="card"><p>No alerts found.</p></div>`;
      return;
    }

    document.getElementById("pestList").innerHTML = pests.map(p => `
      <div class="card">
        <h3>${p.name}</h3>
        <p>⚠ Symptoms: ${p.symptoms}</p>
        <p>🛡 Control: ${p.control}</p>
      </div>
    `).join("");
  } catch (err) {
    console.error(err);
    document.getElementById("pestList").innerHTML = `<p>⚠ Unable to load pest data.</p>`;
  }
}
