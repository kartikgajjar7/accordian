let btn = document.querySelectorAll(".btn");
let para = document.querySelector(".bodyy");
let paras = document.querySelector(".btn");
var btnclick = 0;
Array.from(btn).forEach((e) => {
  e.addEventListener("click", function () {
    if (btnclick == 0) {
      btnclick = 1;
      console.log("clicked");
      para.style.maxHeight = "300px";
      paras.textContent = "less";
      return;
    }
    if (btnclick == 1) {
      btnclick = 0;
      console.log(this.para);
      para.style.maxHeight = "0";
      para.style.padding = "0";
      paras.textContent = "more";
    }
  });
});

//   var btnclick = 0;
//   for (var i = 0; i <= 6; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 5000);
//   }
// });
// btn.addEventListener("click", function () {
//   if (btnclick == 0) {
//     btnclick = 1;
//     console.log("clicked");
//     para.style.maxHeight = "300px";
//     paras.textContent = "less";
//     return;
//   }
//   if (btnclick == 1) {
//     btnclick = 0;
//     console.log("clicked");
//     para.style.maxHeight = "0";
//     para.style.padding = "0";
//     paras.textContent = "more";
//   }
// });
// var btnclick = 0;

// for (var i = 0; i <= 6; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 5000);
// }
