const ellipseArea = (height, width) => {
    return height * 0.5 * width * 0.5 * Math.PI;
  };
  
  document.body.innerHTML += `<p>${ellipseArea(1, 2)}</p>`;
  document.body.innerHTML += `<p>${ellipseArea(2, 2)}</p>`;