window.addEventListener("resize", function () {
    let language = document.querySelector(".language");
    let logo = document.querySelector(".logo");
    let createAccount = document.querySelector(".create-account");
    let footer = document.querySelector(".footer");

    if (window.innerHeight < screen.height * 0.75) {
        language.style.display = "none";  // Hide language
        logo.style.zIndex = "-1";  // Move logo behind
        createAccount.style.zIndex = "-1"; // Move Create Account behind
        footer.style.zIndex = "-1"; // Move footer behind
    } else {
        language.style.display = "block";  // Show language
        logo.style.zIndex = "1";  // Bring logo back
        createAccount.style.zIndex = "1"; // Bring Create Account back
        footer.style.zIndex = "1"; // Bring footer back
    }
});