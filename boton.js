document.addEventListener("DOMContentLoaded", function () {
    var btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });

    btnTop.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
