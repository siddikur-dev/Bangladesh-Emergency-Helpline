// String To Number Convert Function
function strToNumber(id) {
  const string = document.getElementById(id);
  const numberConvert = string.innerText;
  return Number(numberConvert);
}

// Heart count Function
const heartIcons = document.getElementsByClassName("lucide-heart");

for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    const navbarHeart = document.getElementById("heart");
    const heartCount = strToNumber("heart");
    navbarHeart.innerText = heartCount + 1;
  });
}

// textCopyFunction
function setupCopyButtons() {
  const copyButtons = document.getElementsByClassName("copyText");
  const allCopiedDiv = document.getElementById("allCopied");
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
          const originalText = btn.innerText;
          btn.innerText = "Copied!";
          btn.classList.add("bg-gray-200");
          setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove("bg-gray-200");
          }, 3000);

          copyCount++;
          allCopiedDiv.innerText = copyCount + " Copy";
        })
        .catch((err) => console.error("Copy failed:", err));
    });
  }
}
setupCopyButtons();

// Calling Function
const allCallingBtn = document.getElementsByClassName("callBtn");

for (const callBtn of allCallingBtn) {
  callBtn.addEventListener("click", function () {
    const availableCoin = document.getElementById("availableCoin");
    let currentCoin = parseInt(availableCoin.innerText, 10);

    // balance check
    if (currentCoin <= 0) {
      alert("❌ Unavailable coin, please recharge");
      availableCoin.innerText = 0;
      return;
    }

    // minus 20
    const remainingCoin = currentCoin - 20;
    availableCoin.innerText = remainingCoin;

    // get parent card
    const card = this.closest(".card");
    const helpline = card.querySelector(".helplines").innerText;
    const cardTitle = card.querySelector(".cardTitleText").innerText;

    // alert
    alert(`📞 Calling ${cardTitle} ${helpline}...`);

    // history add
    const appendChildDiv = document.getElementById("historyContainer");
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between space-y-2 bg-[#d3e3d3] p-4 rounded-md text-black font-medium";
    historyItem.innerHTML = `
      <div>
        <p class="text-sm sm:text-base">${cardTitle}</p>
        <p class="text-xs sm:text-sm">${helpline}</p>
      </div>
      <span class="text-xs sm:text-sm">${new Date().toLocaleTimeString()}</span>
    `;
    appendChildDiv.appendChild(historyItem);
  });
}

// clear all history
document.getElementById("ClearBtn").addEventListener("click", function () {
  const appendChildDiv = document.getElementById("historyContainer");
  appendChildDiv.innerHTML = "";
});

