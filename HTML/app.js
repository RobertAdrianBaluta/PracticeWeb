const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function toggleCode(button) {
  // Find the closest code container
  const codeBox = button.closest(".CSharpCode");

  // Find the code block inside THIS container
  const codeBlock = codeBox.querySelector(".code-block");

  codeBlock.classList.toggle("collapsed");

  // Update button symbol
  if (codeBlock.classList.contains("collapsed")) {
    button.textContent = "+";
  } else {
    button.textContent = "−";
  }
}
