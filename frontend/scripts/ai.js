const AI_API = "http://localhost:5000/api/ai";

async function askAI() {
  const question = document.getElementById("question").value;
  if (!question) return alert("Please enter a question");

  document.getElementById("aiResponse").innerHTML = `<p>⏳ Thinking...</p>`;

  try {
    const res = await fetch(AI_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    const data = await res.json();

    document.getElementById("aiResponse").innerHTML = `
      <h3>Answer</h3>
      <p>${data.answer}</p>
    `;
  } catch (err) {
    console.error(err);
    document.getElementById("aiResponse").innerHTML = `<p>⚠ Error fetching AI response.</p>`;
  }
}
