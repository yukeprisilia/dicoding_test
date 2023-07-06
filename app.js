// const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classlist.toggle("active");
//   });
// });

// var faqItems = document.querySelectorAll(".faq");

// faqItems.forEach(function (item) {
//   var question = item.querySelector(".question");
//   question.addEventListener("click", function () {
//     item.classList.toggle("active");
//   });
// });

var faqItems = document.querySelectorAll(".faq");

faqItems.forEach(function (item) {
  var question = item.querySelector(".question");
  var icon = question.querySelector(".size-18");

  question.addEventListener("click", function () {
    item.classList.toggle("active");
    icon.classList.toggle("rotate");
  });
});

const navlist = document.querySelector(".nav-list");

document.querySelector("#menu").onclick = (e) => {
  e.preventDefault();
  navlist.classList.toggle("active");
};
