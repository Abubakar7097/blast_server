let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)

// circle skill/////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})

//mixit up portfolio section\\
var mixer = mixitup('.portfolio-gallery');







// active menu/////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);



// sticky Navbar/////////

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 50)
})

// toggle icon Navbar/////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// parallax//////////////////////////////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));


const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

// working contact form \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const form = document.querySelector("form");
const YourName = document.getElementById("name");
const YourEmail = document.getElementById("email");
const phone = document.getElementById("phone");

const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {

    const bodyMessage = `Your Name: ${YourName.value}<br> Your Email: ${YourEmail.
        value}<br> Phone Number: ${phone.value}<br> Your Message: ${mess.value}`;



    Email.send({
        //SecureToken :"e22e8216-a499-4619-a078-0a5a3a224efb",
        Host : "smtp.elasticemail.com",
        Username : "abdullahtest8@gmail.com",
        Password : "4AECEF6C396CC07E8339C97B1D139C8BFB38",
        To: 'abdullahtest8@gmail.com',
        From: "abdullahtest8@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".contant");
    for (const contant of items) {
        if (contant.value == "") {
            contant.classList.add("error");
            contant.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
                checkEmail();
            }

            items[1].addEventListener("keyup", () => {
                checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (contant.value != "") {
                contant.classList.remove("error");
                contant.parentElement.classList.remove("error");
            }
            else {
                contant.classList.add("error");
                contant.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2, 3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");


    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a Valid Email address";
        }
        else{
            errorTxtEmail.innerText = "Email address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();
        if (!yourName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
            console.log("OK");

            sendEmail();

            form.reset();
            return false;
        }

    });