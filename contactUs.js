
function formColumn() {
    const helo = document.querySelector(".say-hello");
    helo.style.flexDirection = "column"
    names.classList.remove("name-styles");
}
function formRow() {
    const helo = document.querySelector(".say-hello");
    helo.style.flexDirection = "row"
    names.classList.add("name-styles");
}
//Changing the navigation content at smaller screen sizes
function contactResize() {

    if (window.innerWidth < 837) {
        formColumn();

    }

    // toggleNav()
}; contactResize()
window.addEventListener('resize', function () {
    if (window.innerWidth >= 837) {
        formRow()

    }
})

