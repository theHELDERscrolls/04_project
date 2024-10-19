import "./Projects.css";
import { dataProfile } from "../../../data/myProfile";
import { anchorTemplate } from "../Anchor/Anchor";

export const createProjects = () => {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.id = "projects";
  const h2 = document.createElement("h2");
  h2.textContent = "My projects";
  section.appendChild(h2);
  const gridDiv = document.createElement("div");
  gridDiv.className = "grid-project-card";
  section.appendChild(gridDiv);

  dataProfile.projects.forEach((element) => {
    const divCard = document.createElement("div");
    divCard.className = "project-card";

    const img = document.createElement("img");
    img.src = element.image;
    img.alt = element.title;

    const h3 = document.createElement("h3");
    h3.textContent = element.title;

    const p = document.createElement("p");
    p.textContent = element.description;

    const links = document.createElement("div");

    links.innerHTML = `
    ${anchorTemplate(
      "project-link",
      element.url,
      "img-link",
      "assets/icons/icon_web.svg",
      "web icon",
      "Website"
    )}

    ${anchorTemplate(
      "project-link",
      element.git,
      "img-link",
      "assets/icons/icon_github.svg",
      "git icon",
      "Repository"
    )}
    `;

    divCard.appendChild(img);
    divCard.appendChild(h3);
    divCard.appendChild(p);
    divCard.appendChild(links);

    gridDiv.appendChild(divCard);
  });

  main.appendChild(section);
};
