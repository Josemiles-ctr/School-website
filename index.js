/*
This funtion toogles the theme of the body element(window.body)
when A user chooses to click the theme fixed icon at position appromimately 30X50 of the bottom right
Respectively, the image content is changed to suit the theme(next)*/

const header = document.getElementById("header");
header.innerHTML = `
  <div class="logo">
            <img src="assets/logo2.jpeg" alt="">
        </div>
        <nav id="desktop">
        </nav>
        <div class="scroll-watcher">
        </div>
`
const desktopView = this.document.getElementById("desktop");
const footer = document.getElementById("footer");
const newHtml = ' <img id="open-close" class="open" src="assets/greenOpening.png" alt="toggle Nagitation bar">'
const newNav = document.getElementById("mobile")
newNav.style.display = "none"
const names = document.querySelector(".names")

footer.innerHTML = `
<div id="footer-left">
        <h2>Stay Connected with us</h2><br>
        <form action="" method="post" onsubmit="handleSubmit(event)">
            <label for="email">Enter Your Email:</label><br>
        <input id="email" type="email" name="email" placeholder="email"><br><br>
        <input id="subscribe-btn" type="submit" value="Subscribe">
        <label for="checkbox"><br>
            <input id="checkbox" type="checkbox">
            Yes, subscribe me to news letter

        </label>
        </form>
    </div>
    <div class="footer-middle">
     <p>+256-415-634-999</p>
     <p>Email : info@mengoseniorschool.com</p>
     <div class="sites">
        <img src="assets/facebook.png" alt="facebook Site">
        <img src="assets/x.png" alt="X site">
        <img src="assets/download.png" alt="Whatsapp Site">
        <img src="assets/instagram.jpeg" alt="instagram Site">
     </div>
    </div>
    <div class="footer-right">
      <div class="right-upper">
        <p>Privacy Policy</p>
      <p>Accessiblity Statement</p>
      <p>Terms & Conditions</p>
      <p>Refund Policy</p>
      </div>
      <div class="right-lower">
        <p>&copy; <span id="year"> </span> by Mengo Senior School</p>
        <p>Designed and Powered by Group O</p>
      </div>
    </div>
`

const navContent = `
            <ul>
                <li>
                    <a href="index.html">HOME</a>
                </li>
                 <li>
                    <a href="about.html">ABOUT US</a></li>
                 <li>
                    <a href="academics.html">ACADEMICS</a>
                 </li>
                 <li>
                    <a href="newsEvents.html">NEW $ EVENTS</a></li>
                 <li>
                    <a href="contactUs.html">CONTACT US</a>
                </li>
            </ul>
            `
desktopView.innerHTML = navContent;
let year = document.getElementById("year")
year.textContent = new Date().getFullYear()
function handleSubmit(ele) {
    const subscribeBtn = document.getElementById("subscribe-btn");
    subscribeBtn.value = "Subscribed"
    subscribeBtn.style.backgroundColor = "red"
    subscribeBtn.style.color = "white";
    window.alert("Thanks for subscribing to our monthly news Letter")
    ele.preventDefault()
}
// Selects the image 

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
        footer.style.flexDirection = "row"


    } else {
        resising()
        if (newNav.style.display === "block") {
            this.document.getElementById("open-close").src = 'assets/greenCancel.jpeg';
        }
    }
})

