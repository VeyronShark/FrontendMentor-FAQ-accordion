const buttons = document.querySelectorAll(".question");
const faqs = document.querySelectorAll(".faq");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle("open");
  });
});