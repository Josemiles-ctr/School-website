/*
This funtion toogles the theme of the body element(window.body)
when A user chooses to click the theme fixed icon at position appromimately 30X50 of the bottom right
Respectively, the image content is changed to suit the theme(next)*/
const desktopView = this.document.getElementById("desktop");
const footer = document.getElementById("footer")
const newHtml = ' <img id="open-close" class="open" src="assets/greenOpening.png" alt="toggle Nagitation bar">'
const newNav = document.getElementById("mobile")
newNav.style.display = "none"
const navContent = `
            <ul>
                <li>
                    <a href="">HOME</a>
                </li>
                 <li>
                    <a href="">ABOUT US</a></li>
                 <li>
                    <a href="">ACADEMICS</a>
                 </li>
                 <li>
                    <a href="">NEW $ EVENTS</a></li>
                 <li>
                    <a href="">CONTACT US</a>
                </li>
            </ul>
            `
desktopView.innerHTML = navContent
// Selects the image element

function changeTheme() {
    const themeChanger = document.getElementById("change-mode")
    const body = document.body;
    const dark = "assets/dark.png";
    const light = "assets/lightTheme.png"
    body.classList.toggle("document-theme")
    if (body.classList.contains("document-theme")) {
        themeChanger.setAttribute('src', light)
    } else {
        themeChanger.setAttribute('src', dark)
    }
}
//Changing the navigation content at smaller screen sizes
function resising() {

    if (window.innerWidth < 837) {
        newNav.innerHTML = navContent
        desktopView.innerHTML = newHtml;

        footer.style.flexDirection = "column"
        footer.style.rowGap = "20px"
        const openClose = document.getElementById("open-close");
        openClose.onclick = function opening() {
            const src1 = 'assets/greenOpening.png';
            const src2 = 'assets/greenCancel.jpeg';

            // You should see "Yes" now

            if (openClose.src.includes(src1)) { // Proper way to check image src
                newNav.style.display = "block";
                openClose.src = src2;
            } else {
                newNav.style.display = "none";
                openClose.src = src1;
            }
        }
    } else {
        newNav.style.display = "none";
        newNav.innerHTML = navContent;
        footer.style.flexDirection = "row"

    }
    // toggleNav()
}; resising()
window.addEventListener('resize', function () {
    if (window.innerWidth >= 837) {
        desktopView.innerHTML = navContent;
        newNav.style.display = "none";
    } else {
        resising()
    }
})

