let reciepeDetails = new Array();
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
  const id = reciepeDetails.length + 1;
  const reciepeName = prompt("enter Your reciepe Name: ");
  const reciepeType = prompt("Enter The type of food: ");
  const reciepeDesc = prompt("enter reciepe description for food: ");

  let reciepeDetail = { id, reciepeName, reciepeType, reciepeDesc };

  reciepeDetails.push(reciepeDetail);

  console.log("Reciepe added successfully!");
}

function updateReciepe() {
  const reciepeId = prompt("enter the id of the reciepe you want to update:");
  const reciepeIndex = findRecipeIndex(reciepeId);

  if (index !== -1) {
    const updatedReciepeName = prompt("Update Your Name: ");
    if (updatedReciepeName) {
      reciepeDetails[reciepeIndex].reciepeName = updatedReciepeName;
    }
    const updateReciepeFood = prompt("Update The type of food: ");
    if (updateReciepeFood) {
      reciepeDetails[reciepeIndex].reciepeType = updateReciepeFood;
    }

    const updateReciepeDesc = prompt("Update description for food: ");
    if (updateReciepeDesc) {
      reciepeDetails[reciepeIndex].reciepeDesc = updateReciepeDesc;
    }

    console.log("updated successfully");
  } else {
    console.log("reciepe not found");
  }
}

function deleteReciepe() {
  const reciepeId = prompt("Enter the ID of the recipe you want to delete:");
  const reciepeIndex = findRecipeIndex(reciepeId);

  if (reciepeIndex !== -1) {
    userDetail.splice(reciepeIndex, 1);

    console.log("Recipe deleted successfully!");
  } else {
    console.log("Recipe not found!");
  }
}

function viewRecipes() {
  let count = 1;
  if (reciepeDetails.length === 0) {
    console.log("No recipes available.");
  } else {
    console.log("Recipes:");
    reciepeDetails.forEach((recipe) => {
      recipe.id = count;
      count++;
      console.log(
        `ID: ${recipe.id}, Name: ${recipe.reciepeName}, Type: ${recipe.reciepeType}, Description: ${recipe.reciepeDesc}`
      );
    });
  }
}

function findRecipeIndex(recipeId) {
  return reciepeDetails.findIndex((recipe) => recipe.id == recipeId);
}
