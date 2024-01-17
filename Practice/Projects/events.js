// document.getElementById("owl").onclick = function () {
//   alert("owl clicked");
// };
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// !important - clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftKey, keyCode

// attachEvent
// jQuery - on

// document.getElementById("image").addEventListener("click", function (e) {
//   console.log("clicked inside the ul");
// });
// document.getElementById("owl").addEventListener("click", function (e) {
//   console.log("clicked owl");
//   e.stopPropagation(); -> event bubble hoke upar ke event pe nai jayega
// });

document.getElementById("google").addEventListener("click", function (e) {
  //   e.preventDefault();
  e.stopPropagation();
  console.log("google clicked");
});

// const images = document
//   .querySelector("#image")
//   .addEventListener("click", function (e) {
//     // console.log(e.target.parentNode);
//     console.log(e.target.tagName);

//     if (e.target.tagName === "IMG") {
//       console.log(e.target.id);
//       let removeIt = e.target.parentNode;
//       removeIt.remove();
//     }
//   });
// removeIt.parentNode.removeChild(removeIt);
