const labels = document.querySelectorAll('.form-control label');

//Loops through text (email, password), splits into each character as an array, maps these to be wrapped in spans and convert back to a string with join
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join('');
});
