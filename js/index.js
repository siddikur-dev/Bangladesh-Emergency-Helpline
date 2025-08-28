//String To Number Convert Function
function strToNumber(id) {
  const string = document.getElementById(id);
  const numberConvert = string.innerText;
  return Number(numberConvert);
}

// Heart count Function
const heartIcons = document.getElementsByClassName("lucide-heart");
for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    //get heart from navbar
    const navbarHeart = document.getElementById("heart");

    //numberConverted
    const heartCount = strToNumber("heart");
    const singleCount = heartCount + 1;
    navbarHeart.innerText = singleCount;
  });
}

// textCopyFunction

function setupCopyButtons() {
  const copyButtons = document.getElementsByClassName("copyText");
  const allCopiedDiv = document.getElementById("allCopied");

  // বর্তমান count বের করো
  let copyCount = parseInt(allCopiedDiv.innerText) || 0;

  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons.item(i)?.addEventListener("click", () => {
      const btn = copyButtons.item(i);
      const cardBody = btn.closest(".card-body");
      const numberP = cardBody.querySelector("p.text-xl");
      if (!numberP) return;

      const numberText = numberP.innerText;
      navigator.clipboard
        .writeText(numberText)
        .then(() => {
          // Button update
          const originalText = btn.innerText;
          btn.innerText = "Copied!";
          btn.classList.add("bg-gray-200");
          setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove("bg-gray-200");
          }, 3000);

          // Counter update
          copyCount++;
          allCopiedDiv.innerText = copyCount + " Copy";
        })
        .catch((err) => console.error("Copy failed:", err));
    });
  }
}

setupCopyButtons();
