const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav__links");

const sectionOne = document.querySelector(".section__one");
const shorten = document.querySelector(".shorten");
const input = document.getElementsByTagName("input")[0];
const shortenBtn = input.parentElement.nextElementSibling;



const shortenedLinks = document.querySelector(".shortenedLinks");
const errorMsg = document.querySelector('.errorMsg');
shortenBtn.addEventListener('click', () => {
    if (input.value != "") {
        const newShortenedLink = document.createElement("div");
        newShortenedLink.setAttribute('class', 'shortenLink')

        const oldLink = document.createElement("div");
        oldLink.setAttribute('class', 'oldLink');
        oldLink.innerText = input.value;

        const newLink = document.createElement("div");
        newLink.setAttribute('class', 'newLink');
        const newLinkDiv = document.createElement("div");
        newLinkDiv.innerText = "https://rel.ink/" + getrandom();

        const newLinkBtn = document.createElement("button");
        newLinkBtn.innerText = "Copy";
        newLinkBtn.addEventListener('click', () => {
            newLinkBtn.setAttribute('class', 'clicked');
            newLinkBtn.innerText = "Copied!";
        })

        newLink.appendChild(newLinkDiv);
        newLink.appendChild(newLinkBtn);

        newShortenedLink.appendChild(oldLink);
        newShortenedLink.appendChild(newLink);

        shortenedLinks.insertBefore(newShortenedLink, shortenedLinks.firstElementChild);
        errorMsg.style.display = "none";
        input.value = "";
        input.style.border = "none";
    } else {
        input.style.border = "2px solid #ff5656";
        errorMsg.style.display = "block";
    }
})

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}