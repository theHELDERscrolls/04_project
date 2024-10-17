export const lighDarkBtn = () => {
  const btn = document.querySelector("#changeMode-btn");

  btn.addEventListener("click", () => {
    const imgBtn = document.querySelector(".moon-sun");
    const body = document.querySelector("body");
    body.classList.toggle("light-mode");

    if (imgBtn.src.endsWith("icon_moon.svg")) {
      imgBtn.src = "/assets/icons/icon_sun.svg";
    } else if (imgBtn.src.endsWith("icon_sun.svg")) {
      imgBtn.src = "/assets/icons/icon_moon.svg";
    }
  });
};
