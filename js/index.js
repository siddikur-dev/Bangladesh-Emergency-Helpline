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
