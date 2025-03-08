function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-100vw"; // Hide sidebar
    } else {
        sidebar.style.left = "0px"; // Show sidebar
    }
}