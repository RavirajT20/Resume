document.addEventListener("DOMContentLoaded", () => {
    const resume = document.querySelector(".resume");
    resume.style.opacity = "0";

    setTimeout(() => {
        resume.style.transition = "1s";
        resume.style.opacity = "1";
    }, 200);
});
