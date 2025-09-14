// 🔐 Login Function
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "raiadmin" && pass === "secure123") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Invalid credentials. Try again.");
  }
}

// 📊 EMI Generator
function generateEMI() {
  let name = document.getElementById("borrower").value;
  let principal = parseFloat(document.getElementById("principal").value);
  let interest = parseFloat(document.getElementById("interest").value);

  let total = principal + (principal * interest / 100);

  let emiPlan = [
    { month: 1, percent: 40 },
    { month: 2, percent: 12 },
    { month: 3, percent: 12 },
    { month: 4, percent: 12 },
    { month: 5, percent: 12 },
    { month: 6, percent: 12 }
  ];

  let html = `<h3>📅 EMI Schedule for ${name}</h3><table><tr><th>Month</th><th>EMI ₹</th></tr>`;
  emiPlan.forEach(e => {
    let emiAmount = (total * e.percent) / 100;
    html += `<tr><td>${e.month}</td><td>${emiAmount.toFixed(2)}</td></tr>`;
  });
  html += `</table>`;

  document.getElementById("emiOutput").innerHTML = html;
}