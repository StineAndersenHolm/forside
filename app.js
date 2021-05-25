const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelectorAll(".content");
const section = document.querySelectorAll("section");
const image_container = document.querySelectorAll(".imgcontainer");
/* const opacity = document.querySelectorAll(".opacity"); */
/* const border = document.querySelector(".border"); */

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  /* let sectionY = section.getBoundingClientRect();
 */
  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  /* opacity.forEach(element => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  }) */

  big_title.style.opacity = - scroll / (header_height / 5) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;

  content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
  image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

  /* border.style.width = `${scroll / (sectionY.top + section_height) * 60}%`; */
})
 
window.onscroll =
function(){
    let blooper = document.getElementById("myVideo");

    if(blooper.getBoundingClientRect().bottom < 200 || blooper.getBoundingClientRect().top > 250)
        blooper.pause();
    else
    blooper.play();
}
