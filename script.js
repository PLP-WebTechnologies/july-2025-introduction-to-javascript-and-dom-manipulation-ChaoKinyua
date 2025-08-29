// Part 1: Variables + Conditionals
function checkYield() {
  let yieldValue = document.getElementById("yield").value;
  let result = document.getElementById("yieldResult");

  if (yieldValue >= 1000) {
    result.textContent = "✅ Great yield! Keep up the good work.";
    result.style.color = "green";
  } else if (yieldValue > 0) {
    result.textContent = "⚠️ Yield is below average. Consider soil testing.";
    result.style.color = "orange";
  } else {
    result.textContent = "❌ Please enter a valid yield.";
    result.style.color = "red";
  }
}

// Part 2: Functions
function calculateProfit() {
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  let profit = price * quantity;
  document.getElementById("profitResult").textContent =
    `💵 Estimated Profit: KES ${profit}`;
}

// Part 3: Loops
function listTasks() {
  let tasks = ["Irrigation", "Weeding", "Fertilizer Application", "Harvesting"];
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    let li = document.createElement("li");
    li.textContent = "✔️ " + task;
    taskList.appendChild(li);
  });
}

// Part 4: DOM Interactivity
function toggleMessage() {
  let text = document.getElementById("toggleText");
  text.classList.toggle("hidden");
}
