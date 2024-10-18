import "./Education.css";
import { dataProfile } from "../../../data/myProfile";

export const createEducation = () => {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.id = "education";

  const h2 = document.createElement("h2");
  h2.textContent = "Education";
  section.appendChild(h2);

  dataProfile.education.forEach((element) => {
    const card = document.createElement("div");
    card.className = "education-card";

    const h3 = document.createElement("h3");
    h3.textContent = element.degree;

    const h4 = document.createElement("h4");
    h4.textContent = element.university;

    const p = document.createElement("p");
    p.textContent = element.graduationYear;

    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(p);

    section.appendChild(card);
  });
  main.appendChild(section);
};
