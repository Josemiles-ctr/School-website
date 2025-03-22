/*
This funtion toogles the theme of the body element(window.body)
when A user chooses to click the theme fixed icon at position appromimately 30X50 of the bottom right
Respectively, the image content is changed to suit the theme(next)*/
const desktopView = this.document.getElementById("desktop");
const footer = document.getElementById("footer")
const newHtml = ' <img id="open-close" src="assets/greenOpening.png" alt="toggle Nagitation bar">'
const newNav = document.getElementById("mobile")
const navContent = `
            <ul>
                <li>
                    <a href="">HOME</a>
                </li>
                 <li>
                    <a href="#sports">ABOUT US</a></li>
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
        newNav.innerHTML = desktopView.innerHTML
        newNav.style.display = "none"
        desktopView.innerHTML = newHtml;

        footer.style.flexDirection = "column"
        footer.style.rowGap = "20px"
    } else {
        desktopView.innerHTML = navContent;
        footer.style.flexDirection = "row"
    }
    // toggleNav()
}; resising()
window.addEventListener('resize', resising)

// function toggleNav() {
//     const openClose = document.getElementById("open-close")
//     const src1 = 'assets/greenOpening.png';
//     const src2 = 'assets/greenCancel.jpeg'
//     if (newHtml.src === src1) {
//         newNav.style.display = "block"
//         newHtml.src = src2;
//     } else {
//         newNav.style.display = "none"
//         newHtml.src = src1
//     }


// }