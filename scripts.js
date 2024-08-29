document.addEventListener("DOMContentLoaded", function() {
    const overviewSection = document.getElementById("overviewSection");
    const inventoryLevelSection = document.getElementById("inventoryLevelSection");

    const overviewBtn = document.getElementById("overviewBtn");
    const homeBtn = document.getElementById("homeBtn");

    // Event listeners for "Overview" and "Home" buttons
    overviewBtn.addEventListener("click", function() {
        overviewSection.style.display = "none";
        inventoryLevelSection.style.display = "block";
    });

    homeBtn.addEventListener("click", function() {
        overviewSection.style.display = "none";
        inventoryLevelSection.style.display = "block";
    });

    const aboutBtn = document.getElementById("aboutBtn");

    aboutBtn.addEventListener("click", function() {
        overviewSection.style.display = "block";
        inventoryLevelSection.style.display = "none";
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const overviewSection = document.getElementById("overviewSection");
//     const inventoryLevelSection = document.getElementById("inventoryLevelSection");

//     const overviewBtn = document.getElementById("overviewBtn");
//     const homeBtn = document.getElementById("homeBtn");
//     const aboutBtn = document.getElementById("aboutBtn");

//     // Event listener for "Overview" button
//     overviewBtn.addEventListener("click", function() {
//         overviewSection.style.display = "block";  // Show Overview section
//         inventoryLevelSection.style.display = "none";  // Hide Inventory Level section
//     });

//     // Event listener for "Home" button
//     homeBtn.addEventListener("click", function() {
//         overviewSection.style.display = "block";  // Show Overview section
//         inventoryLevelSection.style.display = "none";  // Hide Inventory Level section
//     });

//     // Event listener for "About" button
//     aboutBtn.addEventListener("click", function() {
//         overviewSection.style.display = "none";  // Hide Overview section
//         inventoryLevelSection.style.display = "block";  // Show Inventory Level section (or another section you have for "About")
//     });
// });
