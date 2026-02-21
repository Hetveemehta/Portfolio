const pages = document.querySelectorAll(".page");

function navigate(index) {
    pages.forEach(page => page.classList.remove("active"));
    pages[index].classList.add("active");
}

// Animated Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});