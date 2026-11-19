
const NAME = "Hershey";

const MESSAGE =
`Happy Birthday, ${NAME}!

Hello! Happy birtday sayo Sam, ngayon lang ako babawi HAHAHHAA
basta I am wishing na sana may mas marami pang birthday na darating sa buhay mo at sana rin ay masaya ikaw kahit ano man ang man ang kalagayan ng buhay mo. sorry if hindi ems magaling mag-express ng gratitude basta I am so glad na dumating ikaw sa buhay ko, you've helped me sa lahat hindi mo lang alam pero totoo I didn't expect na maga-stay parin ikaw. imagine 3 years na tayong magkaibigan oh basta always ems magasupport sayo even tho may pinagbago ikaw, kasi if icocompare ko ang old you then yung now na ikaw, yung dating ikaw is joker eh and then nakikisabay ikaw sa trip namin and then yung ngayon naman is... as I noticed is napakaserious mo na sa buhay mo, malawak yung wisdom mo sa mga bagay bagay na nangyayari and nagaexist dito sa earth. but still, ikaw parin yan and if kahit ano man ang gagawin mo is magasupport parin ako mwehehehehe

Sana maenjoy mo itong ginawa ko AHAHAHHA 💖

- CJ`;

document.getElementById("title").textContent = "Happy Birthday, " + NAME + "! 🎉";
document.getElementById("letter").textContent = MESSAGE;

function launchConfetti() {
  const colors = ["#ff6b9d", "#ffd54f", "#64b5f6", "#81c784", "#ba68c8"];
  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(piece);
    setTimeout(function () { piece.remove(); }, 5500);
  }
}

const gift = document.getElementById("gift");
gift.addEventListener("click", function () {
  gift.classList.add("open");
  document.getElementById("hint").style.display = "none";
  document.getElementById("surprise").classList.add("show");
  launchConfetti();
});