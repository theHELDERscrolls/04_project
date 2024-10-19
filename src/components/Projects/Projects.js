import { dataProfile } from "../../../data/myProfile";
import { anchorTemplate } from "../Anchor/Anchor";

export const createProjects = () => {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.id = "projects";
  const h2 = document.createElement("h2");
  h2.textContent = "My projects";

  dataProfile.projects.forEach((element) => {
    const div = document.createElement("div");
    div.className = "porject-card";

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
    
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(links);

    section.appendChild(div);
  });

  main.appendChild(section);
};
