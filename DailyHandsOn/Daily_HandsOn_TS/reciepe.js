"use strict";
exports.__esModule = true;
var reciepeDetails = [];
var choice = prompt("Whats your choice ? \n        1:Add Recipe\n        2.Update.Recipe\n        3.Delete Reciepe\n        4.view Reciepe\n        5.Exit");
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
    var id = reciepeDetails.length + 1;
    var reciepeName = prompt("enter Your reciepe Name: ");
    var reciepeType = prompt("Enter The type of food:\n            ".concat("gujarati" /* ReciepeType.Gujju */, "\n            ").concat("italian" /* ReciepeType.Italian */, "\n            ").concat("punjabi" /* ReciepeType.Punjabi */, "\n            ").concat("southindian" /* ReciepeType.SouthIndian */));
    var reciepeDesc = prompt("enter reciepe description for food: ");
    if (reciepeName && reciepeType && reciepeDesc) {
        var reciepeDetail = { id: id, reciepeName: reciepeName, reciepeType: reciepeType, reciepeDesc: reciepeDesc };
        reciepeDetails.push(reciepeDetail);
        console.log("Reciepe added successfully!");
    }
    else {
        console.log("Invalid input. Please provide all details.");
    }
}
function updateReciepe() {
    var reciepeId = prompt("enter the id of the reciepe you want to update:");
    var reciepeIndex = findRecipeIndex(reciepeId);
    if (reciepeIndex !== -1) {
        var updatedReciepeName = prompt("Update Your Name:\n     ");
        if (updatedReciepeName) {
            reciepeDetails[reciepeIndex].reciepeName = updatedReciepeName;
        }
        var updateReciepeFood = prompt("Update The type of food: \n            ".concat("gujarati" /* ReciepeType.Gujju */, "\n            ").concat("italian" /* ReciepeType.Italian */, "\n            ").concat("punjabi" /* ReciepeType.Punjabi */, "\n            ").concat("southindian" /* ReciepeType.SouthIndian */));
        if (updateReciepeFood) {
            reciepeDetails[reciepeIndex].reciepeType = updateReciepeFood;
        }
        var updateReciepeDesc = prompt("Update description for food: ");
        if (updateReciepeDesc) {
            reciepeDetails[reciepeIndex].reciepeDesc = updateReciepeDesc;
        }
        console.log("updated successfully");
    }
    else {
        console.log("reciepe not found");
    }
}
function deleteReciepe() {
    var reciepeId = prompt("Enter the ID of the recipe you want to delete:");
    var reciepeIndex = findRecipeIndex(reciepeId);
    if (reciepeIndex !== -1) {
        reciepeDetails.splice(reciepeIndex, 1);
        console.log("Recipe deleted successfully!");
    }
    else {
        console.log("Recipe not found!");
    }
}
function viewRecipes() {
    var count = 1;
    if (reciepeDetails.length === 0) {
        console.log("No recipes available.");
    }
    else {
        console.log("Recipes:");
        reciepeDetails.forEach(function (recipe) {
            recipe.id = count;
            count++;
            console.log("ID: ".concat(recipe.id, ", Name: ").concat(recipe.reciepeName, ", Type: ").concat(recipe.reciepeType, ", Description: ").concat(recipe.reciepeDesc));
        });
    }
}
function findRecipeIndex(recipeId) {
    if (recipeId !== null) {
        var idToFind = Number(recipeId);
        if (!isNaN(idToFind)) {
            for (var i = 0; i < reciepeDetails.length; i++) {
                if (reciepeDetails[i].id === idToFind) {
                    return i;
                }
            }
        }
    }
    return -1;
}
