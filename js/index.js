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

//Calling Function

//get all id from
function getInnerText(id) {
  const allId = document.getElementById(id).innerText;
  return allId;
}

// get all call button by className

const allCallingBtn = document.getElementsByClassName("callBtn");

for (const callBtn of allCallingBtn) {
  callBtn.addEventListener("click", function () {
    //get coin from navbar
    const availableCoin = document.getElementById("availableCoin");
    let currentCoin = strToNumber("availableCoin");
    const remainingCoin = currentCoin - 20;
    availableCoin.innerText = remainingCoin;
  });
}

//alert function

const allCallingBtns = document.getElementsByClassName("callBtn");

for (const callBtn of allCallingBtns) {
  callBtn.addEventListener("click", function () {
    const card = this.closest(".card");

    // get values
    const helpline = card.querySelector(".helplines").innerText;
    const cardTitle = card.querySelector(".cardTitleText").innerText;

    // alert
    alert(`📞 Calling ${cardTitle} ${helpline}...`);

    // get history container
    const appendChildDiv = document.getElementById("historyContainer");

    // create new history record
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between space-y-2 bg-[#91a791] p-4 rounded-md text-black font-medium";
    historyItem.innerHTML = `
      <div>
        <p class="text-sm sm:text-base">${cardTitle}</p>
        <p class="text-xs sm:text-sm">${helpline}</p>
      </div>
      <span class="text-xs sm:text-sm">${new Date().toLocaleTimeString()}</span>
    `;

    // append instead of replacing
    appendChildDiv.appendChild(historyItem);
  });
}

// clear all history
const ClearBtn = document
  .getElementById("ClearBtn")
  .addEventListener("click", function () {
    const appendChildDiv = document.getElementById("historyContainer");
    appendChildDiv.innerHTML = "";
  });
