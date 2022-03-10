const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInsideBtn = x - buttonLeft;
    const yInsideBtn = y - buttonTop;

    console.log(xInsideBtn, yInsideBtn);

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInsideBtn + 'px';
    circle.style.left = xInsideBtn + 'px';

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
