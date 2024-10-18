export const activeDisplay = () => {
  const cards = document.querySelectorAll(".work-card");

  cards.forEach((card) => {
    const arrow = card.querySelector(".arrow");
    const desc = card.querySelector(".work-desc");

    card.addEventListener("click", () => {
      // Change arrow direction
      if (arrow.src.endsWith("icon_down-arrow.svg")) {
        arrow.src = "/assets/icons/icon_up-arrow.svg";
      } else {
        arrow.src = "/assets/icons/icon_down-arrow.svg";
      }

      // Change desc display
      if (desc.classList.contains("work-desc")) {
        desc.classList.remove("work-desc");
        desc.classList.add("disply-On");
      } else {
        desc.classList.remove("display-On");
        desc.classList.add("work-desc");
      }
    });
  });
};
