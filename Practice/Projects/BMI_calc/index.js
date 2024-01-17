const form = document.querySelector("form");
// this usecase will give u empty value
// const weight = parseInt(document.querySelector("#weight").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const result1 = document.querySelector(".results1");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (BMI < 18.6) {
      result1.innerHTML = `<span>Your BMI is ${BMI} and You are UnderWeight</span>`;
    } else if (BMI > 18.6 && BMI < 24.9) {
      result1.innerHTML = `<span>Your BMI is ${BMI} and You are in Normal Range</span>`;
    } else {
      result1.innerHTML = `<span>Your BMI is ${BMI} and You are Overweight</span>`;
    }
  }
});
