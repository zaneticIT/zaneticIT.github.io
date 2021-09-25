let full_star = "★"
let empty_star = "☆"
let renderStars = "123";
let theme = true;

function hamburger(x) {
    x.classList.toggle("change");
    let navBar = document.getElementById("navBar");
    if (navBar.classList.contains("show")) {
        navBar.classList.remove("show");
    }
    else {
        navBar.classList.add("show");
    }
}

function autoNavBar() {
    let autoNavItems = document.getElementsByClassName("autoNav");
    let nav = document.getElementById("navBar");
    for (let i = 0; i < autoNavItems.length; i++) {
        let name = autoNavItems[i].getAttribute("name");
        let id = autoNavItems[i].id;
        nav.innerHTML += "<a href=\"#" + id + "\">" + name + "</a>";
        console.log(name);
        addListener();
    }
}
function addListener() {
    let nav = document.getElementById("navBar");
    let navItems = nav.getElementsByTagName("a");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function () {
            hamburger(document.getElementById("hamburger"));
        })
    }
}

let buttonElement = document.querySelector(".switch input");
buttonElement.addEventListener("click", switchTheme);

function switchTheme() {
    let x = document.getElementsByTagName("BODY")[0];
    let nightString = "Night"
    if (theme) {
        x.className = nightString;

    }
    else {
        x.className = "";
    }
    theme = !theme;
}

class Stars extends React.Component {
    render() {
        return this.stars(this.props.starsNum);
    }

    stars(numOfStars) {
        let stars = "";

        for (let i = 0; i < numOfStars; i++) {
            stars += full_star
        }

        for (let i = 0; i < (5 - numOfStars); i++) {
            stars += empty_star
        }

        return stars;

    }
}

function fillStars(numOfStars, id) {

    renderStars = <Stars starsNum={numOfStars} />;

    ReactDOM.render(renderStars, document.getElementById(id))
}

autoNavBar();

fillStars(4, "js-stars");
fillStars(4, "java-stars");
fillStars(3, "php-stars");
fillStars(3, "react-stars");
fillStars(5, "html5css3-stars");