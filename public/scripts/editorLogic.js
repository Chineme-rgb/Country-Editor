document.getElementById("renameForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const code = document.getElementById("countryCode").value.trim().toUpperCase();
  const newName = document.getElementById("newName").value.trim();

  const item = polygonSeries.getDataItemById(code);
  if (item) {
    item.set("name", newName);
    document.getElementById("renameResult").innerHTML =
      `<p><strong>${code}</strong> is now shown as <strong>${newName}</strong> (temporary).</p>`;
  } else {
    document.getElementById("renameResult").innerHTML =
      `<p>Country code <strong>${code}</strong> not found.</p>`;
  }
});
document.getElementById("compareForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const codeA = document.getElementById("countryA").value.trim().toUpperCase();
  const codeB = document.getElementById("countryB").value.trim().toUpperCase();

  const itemA = polygonSeries.getDataItemById(codeA);
  const itemB = polygonSeries.getDataItemById(codeB);

  if (itemA && itemB) {
    const nameA = itemA.get("name");
    const nameB = itemB.get("name");

    document.getElementById("comparisonResult").innerHTML = `
      <table>
        <tr><th>Metric</th><th>${nameA}</th><th>${nameB}</th></tr>
        <tr><td>Name</td><td>${nameA}</td><td>${nameB}</td></tr>
        <tr><td>ID</td><td>${codeA}</td><td>${codeB}</td></tr>
        <tr><td>Badge Zone</td><td>🟦</td><td🟥</td></tr>
        <tr><td>Incidents</td><td>2</td><td>5</td></tr>
      </table>
    `;
  } else {
    document.getElementById("comparisonResult").innerHTML =
      `<p>One or both country codes not found.</p>`;
  }
});
