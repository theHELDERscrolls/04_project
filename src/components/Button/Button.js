export const btnTemplate = (
  idBtn,
  classBtn,
  classImg,
  srcImg,
  altImg,
  textBtn
) => {
  return `<button id="${idBtn}" class="${classBtn}"><img class="${classImg}" src="${srcImg}" alt="${altImg}">${textBtn}</button>`;
};
