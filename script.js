/* ==============================
   BORED ZONE JAVASCRIPT
================================= */


/* ==============================
   DATA
================================= */

const jokes = [

    "Why don't scientists trust atoms? Because they make up everything! 😂",

    "My bed and I are perfect for each other... but my alarm keeps trying to break us up. 😴",

    "I told my computer I needed a break. Now it won't stop sending me vacation ads. 😂",

    "Why was the math book sad? Because it had too many problems. 🤣",

    "I am not lazy. I am just on energy-saving mode. 🔋😂",

    "My wallet is like an onion. Opening it makes me cry. 😭",

    "Why don't eggs tell jokes? They might crack up. 🥚😂"

];


const roasts = [

    "Your Wi-Fi signal has more direction than your life. 📶😂",

    "You're not slow... you're just loading permanently. ⏳",

    "Your brain is running on the free trial version. 😭",

    "If procrastination was an Olympic sport, you'd still practice tomorrow. 🏆",

    "You're proof that Ctrl+C and Ctrl+V can create a personality. 😂",

    "Your alarm clock has officially given up on you. ⏰",

    "Even Google doesn't know what you're doing with your life. 😂"

];


const challenges = [

    "Send your friend a random 'I know what you did' message. 😂",

    "Try to keep a straight face for 60 seconds. 😐",

    "Dance for 30 seconds without music. 💃",

    "Call your best friend and say 'We need to talk...' then say 'about biryani.' 😂",

    "Put your phone down for 10 minutes. Impossible? 😈",

    "Speak only in movie dialogues for the next 5 minutes. 🎬",

    "Take a selfie with your funniest face. 🤪"

];


const wouldRatherQuestions = [

    "Would you rather have unlimited money 💰 or unlimited free time ⏰?",

    "Would you rather be invisible 👻 or be able to fly 🦅?",

    "Would you rather never use Instagram again 📱 or never eat biryani again 🍗?",

    "Would you rather know your future 🔮 or change your past ⏳?",

    "Would you rather be extremely famous ⭐ or completely anonymous 🥷?",

    "Would you rather have super strength 💪 or super intelligence 🧠?"

];


const truthQuestions = [

    "What is the most embarrassing thing you've ever done?",

    "Who was your first crush? ❤️",

    "What is one secret nobody knows about you?",

    "What is the weirdest thing you do when you're alone?",

    "Have you ever lied to your best friend?"

];


const dareQuestions = [

    "Send your friend a random emoji and don't explain it. 😂",

    "Do 10 push-ups right now. 💪",

    "Sing the first song that comes to your mind. 🎤",

    "Change your profile picture to something funny for 10 minutes. 😂",

    "Speak in a fake accent for 2 minutes. 😈"

];


/* ==============================
   POPUP
================================= */

let currentFunction = null;


function openPopup(emoji, title, text, functionToRepeat) {

    document.getElementById("popupEmoji").textContent = emoji;

    document.getElementById("popupTitle").textContent = title;

    document.getElementById("popupText").textContent = text;

    document.getElementById("popup").classList.add("active");

    currentFunction = functionToRepeat;
}


function closePopup() {

    document.getElementById("popup").classList.remove("active");

}


function again() {

    if (currentFunction) {
        currentFunction();
    }

}


/* ==============================
   RANDOM ITEM
================================= */

function randomItem(array) {

    return array[
        Math.floor(Math.random() * array.length)
    ];

}


/* ==============================
   RANDOM FUN
================================= */

function randomFun() {

    const options = [

        () => showJoke(),

        () => showRoast(),

        () => showChallenge(),

        () => wouldYouRather(),

        () => coinFlip(),

        () => magicBall(),

        () => truthDare()

    ];

    const randomFunction = randomItem(options);

    randomFunction();

}


/* ==============================
   JOKE
================================= */

function showJoke() {

    openPopup(
        "😂",
        "RANDOM JOKE",
        randomItem(jokes),
        showJoke
    );

}


/* ==============================
   ROAST
================================= */

function showRoast() {

    openPopup(
        "😈",
        "YOU GOT ROASTED!",
        randomItem(roasts),
        showRoast
    );

}


/* ==============================
   CHALLENGE
================================= */

function showChallenge() {

    openPopup(
        "🎲",
        "YOUR CHALLENGE",
        randomItem(challenges),
        showChallenge
    );

}


/* ==============================
   COIN FLIP
================================= */

function coinFlip() {

    const result = Math.random() < 0.5
        ? "HEADS! 🪙"
        : "TAILS! 🪙";

    openPopup(
        "🪙",
        "COIN FLIP",
        result,
        coinFlip
    );

}


/* ==============================
   MAGIC 8 BALL
================================= */

function magicBall() {

    const answers = [

        "YES! Definitely! 😎",

        "Nope. 😂",

        "Maybe... 🤔",

        "Ask again later. 🔮",

        "Absolutely! 🔥",

        "Don't count on it. 😈",

        "The universe says YES! ✨",

        "The universe is confused too. 😂"

    ];

    openPopup(
        "🎱",
        "MAGIC 8 BALL",
        randomItem(answers),
        magicBall
    );

}


/* ==============================
   WOULD YOU RATHER
================================= */

function wouldYouRather() {

    openPopup(
        "🤔",
        "WOULD YOU RATHER?",
        randomItem(wouldRatherQuestions),
        wouldYouRather
    );

}


/* ==============================
   TRUTH OR DARE
================================= */

function truthDare() {

    const type = Math.random() < 0.5
        ? "TRUTH"
        : "DARE";

    if (type === "TRUTH") {

        openPopup(
            "😇",
            "TRUTH",
            randomItem(truthQuestions),
            truthDare
        );

    } else {

        openPopup(
            "🔥",
            "DARE",
            randomItem(dareQuestions),
            truthDare
        );

    }

}


/* ==============================
   LOVE CALCULATOR
================================= */

function showLove() {

    const name1 = prompt("Enter first name ❤️");

    if (!name1) return;


    const name2 = prompt("Enter second name ❤️");

    if (!name2) return;


    const percentage =
        Math.floor(Math.random() * 51) + 50;


    let message;


    if (percentage >= 90) {

        message = `${name1} ❤️ ${name2}<br><br>
        ${percentage}% — Dangerous Chemistry! 🔥😂`;

    } else if (percentage >= 75) {

        message = `${name1} ❤️ ${name2}<br><br>
        ${percentage}% — Looking good! 😍`;

    } else if (percentage >= 60) {

        message = `${name1} ❤️ ${name2}<br><br>
        ${percentage}% — Something is cooking... 👀`;

    } else {

        message = `${name1} ❤️ ${name2}<br><br>
        ${percentage}% — Better stay friends 😂`;

    }


    document.getElementById("popupEmoji").textContent = "💘";

    document.getElementById("popupTitle").textContent =
        "LOVE CALCULATOR";

    document.getElementById("popupText").innerHTML =
        message;

    document.getElementById("popup").classList.add("active");

    currentFunction = showLove;

}
/* =========================================
   EXTRA FUN EFFECTS
========================================= */


/* -----------------------------------------
   MOUSE FOLLOW GLOW
----------------------------------------- */

const glow = document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);


document.addEventListener("mousemove", function(event) {

    glow.style.left = event.clientX + "px";

    glow.style.top = event.clientY + "px";

});


/* -----------------------------------------
   3D CARD TILT
----------------------------------------- */

const cards = document.querySelectorAll(".fun-card");


cards.forEach(card => {

    card.addEventListener("mousemove", function(event) {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX = rect.width / 2;

        const centerY = rect.height / 2;


        const rotateX =
            (y - centerY) / 15;

        const rotateY =
            (centerX - x) / 15;


        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;


        card.style.setProperty(
            "--mouse-x",
            x + "px"
        );

        card.style.setProperty(
            "--mouse-y",
            y + "px"
        );

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) scale(1)";

    });

});


/* -----------------------------------------
   EMOJI BURST
----------------------------------------- */

function emojiBurst(emoji = "😂") {

    for (let i = 0; i < 8; i++) {

        const element =
            document.createElement("div");

        element.className =
            "floating-emoji";

        element.textContent = emoji;


        element.style.left =
            (window.innerWidth / 2 +
            (Math.random() * 200 - 100)) + "px";


        element.style.top =
            (window.innerHeight / 2 +
            (Math.random() * 100 - 50)) + "px";


        document.body.appendChild(element);


        setTimeout(() => {

            element.remove();

        }, 2000);

    }

}


/* -----------------------------------------
   CONFETTI
----------------------------------------- */

function createConfetti() {

    const emojis = [
        "🎉",
        "✨",
        "🎊",
        "⭐",
        "😂",
        "🔥"
    ];


    for (let i = 0; i < 40; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";


        confetti.style.animationDuration =
            (2 + Math.random() * 2) + "s";


        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}


/* -----------------------------------------
   BUTTON CLICK EFFECT
----------------------------------------- */

document.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        emojiBurst("✨");

    }

});


/* -----------------------------------------
   SPECIAL RANDOM FUN EFFECT
----------------------------------------- */

const oldRandomFun = randomFun;

randomFun = function() {

    oldRandomFun();

    setTimeout(() => {

        createConfetti();

    }, 200);

};


/* -----------------------------------------
   POPUP RESULT EFFECT
----------------------------------------- */

const popupBox =
    document.querySelector(".popup-box");


const observer =
    new MutationObserver(() => {

        if (
            document
                .getElementById("popup")
                .classList
                .contains("active")
        ) {

            popupBox.classList.remove(
                "result-pop"
            );


            void popupBox.offsetWidth;


            popupBox.classList.add(
                "result-pop"
            );

        }

    });


observer.observe(
    document.getElementById("popup"),
    {
        attributes: true
    }
);


/* -----------------------------------------
   KEYBOARD FUN
----------------------------------------- */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.code === "Space") {

            event.preventDefault();

            randomFun();

        }

        if (event.code === "Escape") {

            closePopup();

        }

    }
);
