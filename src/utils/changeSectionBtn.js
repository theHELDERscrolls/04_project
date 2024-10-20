export const changeSection = () => {
  const experience = document.querySelector("#work-experience");
  const h2Experience = document.querySelector("#work-experience > h2");
  const education = document.querySelector("#education");
  const h2Education = document.querySelector("#education > h2");
  const anchorChanged = document.querySelector('a[href="#work-experience"]');
  education.style.display = "none";

  h2Experience.addEventListener("click", () => {
    anchorChanged.textContent = "Education";
    anchorChanged.href = "#education";
    experience.style.display = "none";
    education.style.display = "flex";
  });

  h2Education.addEventListener("click", () => {
    anchorChanged.textContent = "Experience";
    anchorChanged.href = "#work-experience";
    education.style.display = "none";
    experience.style.display = "flex";
  });
};
