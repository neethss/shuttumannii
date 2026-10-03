function enterUniverse() {
    const opening = document.getElementById("opening");
    const website = document.getElementById("mainWebsite");

    opening.style.display = "none";
    website.style.display = "block";

    window.scrollTo(0, 0);
}

function showPopup(title, message) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupMessage").innerText = message;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

/* =========================================
   FINAL SPIDER-VERSE SURPRISE
========================================= */

function finalSurprise() {

    const finalScreen =
        document.getElementById("finalScreen");

    finalScreen.style.display = "flex";

    document.body.style.overflow = "hidden";

    createFinalParticles();
}


function closeFinalSurprise() {

    const finalScreen =
        document.getElementById("finalScreen");

    finalScreen.style.display = "none";

    document.body.style.overflow = "auto";

    document.getElementById(
        "finalParticles"
    ).innerHTML = "";
}


function createFinalParticles() {

    const container =
        document.getElementById(
            "finalParticles"
        );

    container.innerHTML = "";

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add(
            "final-particle"
        );

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            Math.random() * 100 + "vh";

        particle.style.animationDelay =
            Math.random() * 2 + "s";

        particle.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        if (Math.random() > .5) {

            particle.style.background =
                "#1685ff";
        }

        container.appendChild(
            particle
        );
    }
}


/* =========================================
   LOVE LETTER
========================================= */

function openLoveLetter() {

    const letter =
        document.getElementById("loveLetterPopup");

    letter.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeLoveLetter() {

    const letter =
        document.getElementById("loveLetterPopup");

    letter.style.display = "none";

    document.body.style.overflow = "auto";
}


/* Click outside letter to close */

document
    .getElementById("loveLetterPopup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLoveLetter();
        }

    });
    /* =========================================
   LOVE LETTER
========================================= */

function openLoveLetter() {

    const letter =
        document.getElementById("loveLetterPopup");

    letter.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeLoveLetter() {

    const letter =
        document.getElementById("loveLetterPopup");

    letter.style.display = "none";

    document.body.style.overflow = "auto";
}


/* Click outside letter to close */

document
    .getElementById("loveLetterPopup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLoveLetter();
        }

    });