import "./Experience.css";
import { dataProfile } from "../../../data/myProfile";

export const createExperience = () => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.id = "work-experience";

  const h2 = document.createElement("h2");
  h2.textContent = "Experience";
  section.appendChild(h2);

  dataProfile.workExperience.forEach((element) => {
    const card = document.createElement("div");
    card.className = "work-card";

    const h3 = document.createElement("h3");
    h3.textContent = element.position;

    const h4 = document.createElement("h4");
    h4.textContent = element.company;

    const dateDiv = document.createElement("div");
    dateDiv.className = "work-date";

    const startDate = document.createElement("p");
    startDate.textContent = element.startDate;

    const endDate = document.createElement("p");
    endDate.textContent = element.endDate;

    dateDiv.appendChild(startDate);
    dateDiv.appendChild(endDate);

    const img = document.createElement("img");
    img.className="arrow"
    img.src = "/assets/icons/icon_down-arrow.svg";
    img.alt = "icon_down-arrow";

    const description = document.createElement("p");
    description.className = "work-desc";
    description.textContent = element.description;

    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(dateDiv);
    card.appendChild(img);
    card.appendChild(description);

    section.appendChild(card);
  });

  main.appendChild(section);
};
