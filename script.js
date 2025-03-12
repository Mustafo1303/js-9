const searchInput = document.getElementById("search");
const boxes = document.querySelectorAll(".block1");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    boxes.forEach(box => {
        const productName = box.querySelector(".mars").textContent.toLowerCase();
        box.style.display = productName.includes(query) ? "block" : "none";
    });
});
