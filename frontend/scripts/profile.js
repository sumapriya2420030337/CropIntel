function saveProfile() {
  const name = document.getElementById("farmerName").value;
  const location = document.getElementById("farmerLocation").value;
  const phone = document.getElementById("farmerPhone").value;

  if (!name || !location || !phone) return alert("Please fill all details");

  const profile = { name, location, phone };
  localStorage.setItem("farmerProfile", JSON.stringify(profile));

  loadProfile();
}

function loadProfile() {
  const saved = localStorage.getItem("farmerProfile");
  if (!saved) return;

  const { name, location, phone } = JSON.parse(saved);
  document.getElementById("profileDetails").innerHTML = `
    <p>👤 Name: ${name}</p>
    <p>📍 Location: ${location}</p>
    <p>📞 Phone: ${phone}</p>
  `;
}

loadProfile();
