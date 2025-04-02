
const helo = document.querySelector(".say-hello");
function formColumn() {
    helo.style.flexDirection = "column"
    names.classList.remove("name-styles");
    helo.style.justifyContent = "space-between";
}
function formRow() {
    helo.style.flexDirection = "row"
    names.classList.add("name-styles");
    helo.style.justifyContent = "space-between";
}
//Changing the navigation content at smaller screen sizes
function contactResize() {

    if (window.innerWidth < 837) {
        formColumn();

    } else {
        formRow()
    }

    // toggleNav()
}; contactResize()
window.addEventListener('resize', function () {
    if (window.innerWidth >= 837) {
        formRow()

    } else {
        formColumn()
    }
})

