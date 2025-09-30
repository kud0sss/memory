import {images} from "./data.js";

images.sort(()=> Math.random() - 0,5);
let visibleCards = [];
const container = document.querySelector(".container");
images.forEach((item)=>{
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("card"+item.id);
  const img = document.createElement("img");
  img.src = item.url;
  img.alt = "";
  card.append(img);
  container.append(card);
    card.addEventListener("click", ()=>{
      if (visibleCards.length < 2) {
        card.classList.toggle("card-show");
        visibleCards.push(item);
        if (visibleCards.length == 2) {
        setTimeout(() => {
          card.classList.toggle("card-show");
          document.querySelector(".card" + visibleCards[0].id).classList.remove ("card-show");
          visibleCards = [];
        }, 3000);
      }
    }
  })
});

// const cards = document.querySelectorAll(".card");
// for (let card of cards){
//   card.addEventListener("click", ()=>{
//     card.classList.toggle("card-show");
//     setTimeout(() => {
//       card.classList.toggle("card-show");
//     }, 3000);
//   })
// }

