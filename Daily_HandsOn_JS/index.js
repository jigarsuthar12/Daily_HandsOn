let userDetail = new Array();
const choice = prompt(`Whats your choice ? 
        1:Add Recipe
        2.Update.Recipe
        3.Delete Reciepe
        4.view Reciepe
        5.Exit`);

switch (Number(choice)) {
  case 1:
    addReciepe();
    break;
  case 2:
    updateReciepe();
    break;
  case 3:
    deleteReciepe();
    break;
  case 4:
    viewRecipes();
    break;
  case 5:
    console.log("exited!");
    break;

  default:
    alert("Enter a valid number");
}

function addReciepe() {
  //   console.log(userDetail.length());
  let id = userDetail.length + 1;
  let userName = prompt("enter Your Name: ");
  let userType = prompt("Enter The type of food: ");
  let userDesc = prompt("enter description for food: ");

  let newRecipe = { id, userName, userType, userDesc };

  userDetail.push(newRecipe);

  console.log("Reciepe added successfully!");
}

function updateReciepe() {
  let reciepeId = prompt("enter the id of the reciepe you want to update:");
  let index = findRecipeIndex(reciepeId);

  if (index !== -1) {
    let updatedName = prompt("Update Your Name: ");
    if (updatedName) {
      userDetail[index].userName = updatedName;
    }
    let updatedFood = prompt("Update The type of food: ");
    if (updatedFood) {
      userDetail[index].userType = updatedFood;
    }

    let updatedDesc = prompt("Update description for food: ");
    if (updatedDesc) {
      userDetail[index].userDesc = updatedDesc;
    }

    console.log("updated successfully");
  } else {
    console.log("reciepe not found");
  }
}

function deleteReciepe() {
  let userId = prompt("Enter the ID of the recipe you want to delete:");
  let index = findRecipeIndex(userId);

  if (index !== -1) {
    userDetail.splice(index, 1);

    console.log("Recipe deleted successfully!");
  } else {
    console.log("Recipe not found!");
  }
}

function viewRecipes() {
  let count = 1;
  if (userDetail.length === 0) {
    console.log("No recipes available.");
  } else {
    console.log("Recipes:");
    userDetail.forEach((recipe) => {
      recipe.id = count;
      count++;
      console.log(
        `ID: ${recipe.id}, Name: ${recipe.userName}, Type: ${recipe.userType}, Description: ${recipe.userDesc}`
      );
    });
  }
}

function findRecipeIndex(recipeId) {
  return userDetail.findIndex((recipe) => recipe.id == recipeId);
}
