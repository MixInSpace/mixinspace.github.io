var backgroundColor = 'rgba(35, 25, 66, 1)';
document.body.style.backgroundColor = backgroundColor

document.addEventListener('mousemove', (ev) => {
  let xSizeOfPart = document.documentElement.offsetWidth / 100;
  let ySizeOfPart = document.documentElement.offsetHeight / 100;
  backgroundColor = 'rgba(' + (ev.clientX / xSizeOfPart) % 100 + ',' + (ev.clientY / ySizeOfPart) % 100 + ',50,1)';
  document.body.style.backgroundColor = backgroundColor
});

document.addEventListener('mouseleave', (ev) => {
  document.body.style.backgroundColor = backgroundColor;
});