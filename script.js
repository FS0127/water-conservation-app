document.getElementById("usageForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const shower = parseFloat(document.getElementById("shower").value || 0);
  const flushes = parseFloat(document.getElementById("flushes").value || 0);
  const brushing = parseFloat(document.getElementById("brushing").value || 0);
  const dishwashing = parseFloat(document.getElementById("dishwashing").value || 0);
  const laundry = parseFloat(document.getElementById("laundry").value || 0);
  const total = (shower * 2.1) + (flushes * 1.6) + (brushing * 1.0) + (dishwashing * 2.5) + (laundry * 25);
  document.getElementById("result").innerText = `Estimated Usage: ${total.toFixed(1)} gallons/day`;
});
