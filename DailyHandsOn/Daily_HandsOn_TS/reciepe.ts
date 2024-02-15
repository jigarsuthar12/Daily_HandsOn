let reciepeDetails: {
  id: number;
  reciepeName: string;
  reciepeType: string;
  reciepeDesc: string;
}[] = [];

const enum ReciepeType {
  Italian = "italian",
  Gujju = "gujarati",
  SouthIndian = "southindian",
  Punjabi = "punjabi",
}

const choice: string | null = prompt(`Whats your choice ? 
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

function addReciepe(): void {
  const id: number = reciepeDetails.length + 1;
  const reciepeName: string | null = prompt("enter Your reciepe Name: ");
  const reciepeType: string | null = prompt(`Enter The type of food:
            ${ReciepeType.Gujju}
            ${ReciepeType.Italian}
            ${ReciepeType.Punjabi}
            ${ReciepeType.SouthIndian}`);
  const reciepeDesc: string | null = prompt(
    "enter reciepe description for food: "
  );

  if (reciepeName && reciepeType && reciepeDesc) {
    let reciepeDetail = { id, reciepeName, reciepeType, reciepeDesc };

    reciepeDetails.push(reciepeDetail);

    console.log("Reciepe added successfully!");
  } else {
    console.log("Invalid input. Please provide all details.");
  }
}

function updateReciepe(): void {
  const reciepeId: string | null = prompt(
    "enter the id of the reciepe you want to update:"
  );
  const reciepeIndex: number = findRecipeIndex(reciepeId);

  if (reciepeIndex !== -1) {
    const updatedReciepeName: string | null = prompt(`Update Your Name:
     `);
    if (updatedReciepeName) {
      reciepeDetails[reciepeIndex].reciepeName = updatedReciepeName;
    }
    const updateReciepeFood: string | null = prompt(
      `Update The type of food: 
            ${ReciepeType.Gujju}
            ${ReciepeType.Italian}
            ${ReciepeType.Punjabi}
            ${ReciepeType.SouthIndian}`
    );
    if (updateReciepeFood) {
      reciepeDetails[reciepeIndex].reciepeType = updateReciepeFood;
    }

    const updateReciepeDesc: string | null = prompt(
      "Update description for food: "
    );
    if (updateReciepeDesc) {
      reciepeDetails[reciepeIndex].reciepeDesc = updateReciepeDesc;
    }

    console.log("updated successfully");
  } else {
    console.log("reciepe not found");
  }
}

function deleteReciepe(): void {
  const reciepeId: string | null = prompt(
    "Enter the ID of the recipe you want to delete:"
  );
  const reciepeIndex: number = findRecipeIndex(reciepeId);

  if (reciepeIndex !== -1) {
    reciepeDetails.splice(reciepeIndex, 1);

    console.log("Recipe deleted successfully!");
  } else {
    console.log("Recipe not found!");
  }
}

function viewRecipes(): void {
  let count: number = 1;
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

function findRecipeIndex(recipeId: string | null): number {
  if (recipeId !== null) {
    const idToFind: number = Number(recipeId);

    if (!isNaN(idToFind)) {
      for (let i = 0; i < reciepeDetails.length; i++) {
        if (reciepeDetails[i].id === idToFind) {
          return i;
        }
      }
    }
  }

  return -1;
}

export {};
