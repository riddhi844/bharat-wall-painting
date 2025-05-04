document.getElementById("costForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const area = width * height;
    const ratePerSqFt = 10; // Adjust rate as needed
    const cost = area * ratePerSqFt;

    document.getElementById("result").innerText =
        `Estimated Cost: ₹${cost.toFixed(2)} for ${area} sq.ft`;
});
