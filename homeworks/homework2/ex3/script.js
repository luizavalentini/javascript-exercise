const contador = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
      contador.classList.add("up");
    } else {
      count = 0; //reset
    }
    counter.textContent = count;
  });
});