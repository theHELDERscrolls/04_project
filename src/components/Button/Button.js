export const btnTemplate = (idBtn, classBtn, srcImg, altImg, textBtn) => {
  return `<button id="${idBtn}" class="${classBtn}"><img src="${srcImg}" alt="${altImg}">${textBtn}</button>`;
};
