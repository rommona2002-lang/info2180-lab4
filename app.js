
document.getElementById("search-btn").addEventListener("click", async () => {
  try {
    const res = await fetch("superheroes.php");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    alert(text);
  } catch (err) {
    alert("Failed to fetch superheroes: " + err.message);
  }
});

