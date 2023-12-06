// Shuffle emojis
const emojis = ["🐱", "🐱", "🐶", "🐶", "🐯", "🐯", "🦊", "🦊", "🐸", "🐸", "🐼", "🐼"];
let shuffleEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];

    box.onclick = function () {
        this.classList.add("box-open");
        setTimeout(function () {
            if (document.querySelectorAll(".box-open").length > 1) {
                if (document.querySelectorAll(".box-open")[0].innerHTML == document.querySelectorAll(".box-open")[1].innerHTML) {
                    document.querySelectorAll(".box-open")[0].classList.add("box-match");
                    document.querySelectorAll(".box-open")[1].classList.add("box-match");

                    document.querySelectorAll(".box-open")[1].classList.remove("box-open");
                    document.querySelectorAll(".box-open")[0].classList.remove("box-open");

                    if (document.querySelectorAll(".box-match").length == emojis.length) {
                        alert("Hurra, du klarte det!");
                    }
                } else {
                    document.querySelectorAll(".box-open")[1].classList.remove("box-open");
                    document.querySelectorAll(".box-open")[0].classList.remove("box-open");
                }
            }
        }, 500);
    };

    document.querySelector(".game").appendChild(box);
}

//Reset button
document.querySelector(".reset").onclick = function () {
    window.location.reload();
};

