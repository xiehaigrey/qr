function checkCertificate() {
    var certificateNumber = document.getElementById("certificateInput").value;
    if (certificateNumber === "M102009195") {
        window.location.href = "certificate.html";
    } else {
        alert("This certificate number is not valid");
    }
}