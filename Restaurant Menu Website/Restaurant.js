document.addEventListener("DOMContentLoaded", function () {
    let cardContainers = document.querySelectorAll(".card-container");
    let preBtns = document.querySelectorAll(".pre-btn");
    let nxtBtns = document.querySelectorAll(".nxt-btn");
  
    preBtns.forEach((preBtn, index) => {
      preBtn.addEventListener("click", () => {
        cardContainers[index].scrollBy({
          left: -300,
          behavior: "smooth"
        });
      });
    });
  
    nxtBtns.forEach((nxtBtn, index) => {
      nxtBtn.addEventListener("click", () => {
        cardContainers[index].scrollBy({
          left: 300,
          behavior: "smooth"
        });
      });
    });
  });
  
