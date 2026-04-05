// Change Heading
document.getElementById("btn1").addEventListener("click", function() {
    let text = document.getElementById("inputText").value;
    document.getElementById("heading").innerText = text;
});

// Change Background
document.getElementById("btn2").addEventListener("click", function() {
    document.body.style.backgroundColor = "#d4edda";
});

// Increase Font Size
document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("heading").style.fontSize = "40px";
});

// Show/Hide Paragraph
document.getElementById("btn4").addEventListener("click", function() {
    let para = document.getElementById("para");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});

// Reset Everything
document.getElementById("btn5").addEventListener("click", function() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#e0e0e0";
    document.getElementById("heading").style.fontSize = "32px";
    document.getElementById("para").style.display = "block";
    document.getElementById("inputText").value = "";
});