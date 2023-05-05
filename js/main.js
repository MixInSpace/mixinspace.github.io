var backgroundColor = 'rgba(255,255,255,1)';

document.addEventListener('mousemove', (ev) => {
  let nSizeOfPart = document.documentElement.offsetWidth / 100;
  backgroundColor = 'rgba(' + ev.clientX / nSizeOfPart + ',' + ev.clientY / nSizeOfPart + ',50,1)';
  document.body.style.backgroundColor = backgroundColor
});

document.addEventListener('mouseleave', (ev) => {
  document.body.style.backgroundColor = backgroundColor;
});