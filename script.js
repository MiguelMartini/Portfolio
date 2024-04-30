const headerLinks = document.querySelectorAll('.nav-header a[href^="#"]')

console.log(headerLinks)

headerLinks.forEach((link) => {
    link.addEventListener("click", () => console.log("Clicado"))
})