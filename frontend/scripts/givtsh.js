const SCHEME_API = "http://localhost:5000/api/schemes";

async function loadSchemes() {
  const res = await fetch(SCHEME_API);
  const schemes = await res.json();

  document.getElementById("schemeList").innerHTML = schemes.map(s => `
    <div class="card">
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <p>💰 Benefit: ${s.benefit}</p>
    </div>
  `).join("");
}

loadSchemes();
