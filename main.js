

let mainRating = document.querySelector(".rating")
let thanks = document.querySelector(".thank")
let submitBtn = document.getElementById("btn")
let rateValues = document.querySelectorAll(".value")
let returnValue = document.getElementById("return-value")

submitBtn.addEventListener("click", () => {
    mainRating.style.display = "none"
    thanks.style.display = "flex"
  thanks.classList.remove("hidden");

})
rateValues.forEach((rateValue) => {
  rateValue.addEventListener("click", () => {
    returnValue.innerHTML = rateValue.innerHTML
  })
})
