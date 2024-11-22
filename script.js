function calculateMark() {
    const subject = document.getElementById("subject").value; // Get value from dropdown
    const cat1 = parseFloat(document.getElementById("cat1").value) || 0;
    const cat2 = parseFloat(document.getElementById("cat2").value) || 0;
    const cat3 = parseFloat(document.getElementById("cat3").value) || 0;

    let result = 0;

    if (subject === "t") {
        const ass1 = parseFloat(document.getElementById("ass1").value) || 0;
        const ass2 = parseFloat(document.getElementById("ass2").value) || 0;
        const ass3 = parseFloat(document.getElementById("ass3").value) || 0;

        const st = (cat1 + cat2 + cat3) / 3;
        const at = (ass1 + ass2 + ass3) / 3;
        result = (((st * 0.7) + (at * 0.3)) * 0.8).toFixed(2);
    } else if (subject === "p") {
        const modelMark = parseFloat(document.getElementById("modelMark").value) || 0;

        const st = (cat1 + cat2 + cat3) / 3;
        result = ((st * 0.8) + (modelMark * 0.2)).toFixed(2);
    } else {
        alert("Please select a valid subject type.");
        return;
    }

    document.getElementById("result").textContent = result;
}

// Show/hide relevant input fields based on subject type
document.getElementById("subject").addEventListener("change", function () {
    const subject = this.value;
    document.getElementById("assignments").style.display = subject === "t" ? "block" : "none";
    document.getElementById("model").style.display = subject === "p" ? "block" : "none";
});
