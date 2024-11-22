function calculateRequirements() {
    const cropType = document.getElementById("crop-type").value;
    const weather = document.getElementById("weather").value;
    const cropAmount = parseFloat(document.getElementById("crop-amount").value);

    if (isNaN(cropAmount) || cropAmount <= 0) {
        alert("Please enter a valid crop amount.");
        return;
    }

    // Base requirements per kg for each crop
    const cropData = {
        wheat: { water: 2, fertilizer: 0.5 },
        rice: { water: 5, fertilizer: 1 },
        corn: { water: 3, fertilizer: 0.7 },
        soyabean: { water: 2.5, fertilizer: 0.6},
        potato: { water: 1.5, fertilizer: 0.4},
        sugarcane: { water: 5.5, fertilizer: 1.2}
    };

    // Weather adjustments
    const weatherAdjustment = {
        sunny: 1.2,
        rainy: 0.8,
        cloudy: 1.0,
    };

    const cropInfo = cropData[cropType];
    const weatherFactor = weatherAdjustment[weather];

    // Calculate the requirements
    const totalWater = cropInfo.water * cropAmount * weatherFactor;
    const totalFertilizer = cropInfo.fertilizer * cropAmount * weatherFactor;

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>Results:</strong></p>
        <p>Water Required: ${totalWater.toFixed(2)} liters</p>
        <p>Fertilizer Required: ${totalFertilizer.toFixed(2)} kg</p>
    `;
}
