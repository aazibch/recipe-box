import React, { Component } from 'react';
import RecipeAccordion from '../../components/MainContent/RecipeAccordion/RecipeAccordion';
import Modal from '../../components/MainContent/Modal/Modal';

class Recipes extends Component {
    state = {
        recipes: null,
        currentName: "",
        currentIngredients: "",
        currentIndex: null
    }

    componentWillMount() {
        let storedData = localStorage.getItem("recipes");

        if (!storedData) {
            const recipes = [
                {
                    name: "Salmon Burgers",
                    ingredients: ["Salmon fillet", "Egg whites", "Dijon mustard", "Bread crumbs", "Chopped fresh dill", "Kosher salt", "Olive oil", "Brioche buns (toasted)"]
                },
                {
                    name: "Cheese and Onion Pie",
                    ingredients: ["Cheese", "Onion"]
                },
                {
                    name: "Spaghetti",
                    ingredients: ["Onion", "Bell pepper", "Garlic powder", "Butter", "Salt", "Pepper", "Tomato sauce", "Spaghetti noodles", "Hamburger meat"]
                }
            ];
    
            localStorage.setItem("recipes", JSON.stringify(recipes));
            this.setState({recipes: recipes});
        } else {
            this.setState({recipes: JSON.parse(storedData)});
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.recipes !== nextState.recipes) {
            localStorage.setItem("recipes", JSON.stringify(nextState.recipes));
        }
    }

    recipeNameHandler = (event) => this.setState({currentName: event.target.value});

    recipeIngredientsHandler = (event) => this.setState({currentIngredients: event.target.value});

    submitRecipeHandler = () => {
        const updatedRecipes = [...this.state.recipes];

        updatedRecipes.push({
            name: this.state.currentName,
            ingredients: this.state.currentIngredients.split(",")
        });

        this.setState({
            recipes: updatedRecipes,
            currentName: "",
            currentIngredients: ""
        });
    }

    dismissModalHandler = () => {
        this.setState({
            currentName: "",
            currentIngredients: "",
            currentIndex: null
        });
    }

    editRecipeHandler = (recipeIndex) => {
        this.setState({
            currentName: this.state.recipes[recipeIndex].name,
            currentIngredients: this.state.recipes[recipeIndex].ingredients.join(", "),
            currentIndex: recipeIndex
        });
    }

    submitEditedRecipeHandler = () => {
        const updatedRecipes = [...this.state.recipes];

        updatedRecipes[this.state.currentIndex] = {
            name: this.state.currentName,
            ingredients: this.state.currentIngredients.split(",")
        }

        this.setState({
            recipes: updatedRecipes,
            currentName: "",
            currentIngredients: "",
            currentIndex: null
        });
    }

    deleteRecipeHandler = (recipeIndex) => {
        const updatedRecipes = [...this.state.recipes];

        updatedRecipes.splice(recipeIndex, 1);
        this.setState({recipes: updatedRecipes});
    }

    render() {
        return (
            <React.Fragment>
                <RecipeAccordion
                    recipes={this.state.recipes}
                    editRecipeHandler={this.editRecipeHandler}
                    recipeNameValue={this.state.currentName}
                    recipeIngredientsValue={this.state.currentIngredients}
                    recipeNameHandler={this.recipeNameHandler}
                    recipeIngredientsHandler={this.recipeIngredientsHandler}
                    submitEditedRecipeHandler={this.submitEditedRecipeHandler}
                    dismissModalHandler={this.dismissModalHandler}
                    deleteRecipeHandler={this.deleteRecipeHandler} />

                <Modal
                    label="new-recipe-modal"
                    title="Add New Recipe"
                    recipeNameHandler={this.recipeNameHandler}
                    recipeNameValue={this.state.currentName}
                    recipeNamePlaceholder="Recipe Name"
                    recipeIngredientsHandler={this.recipeIngredientsHandler}
                    recipeIngredientsValue={this.state.currentIngredients}
                    recipeIngredientsPlaceholder="Separate the name of each ingredient by a comma."
                    submitHandler={this.submitRecipeHandler}
                    dismissHandler={this.dismissModalHandler} />

                <button
                    id="new=recipe-button"
                    type="button"
                    className="btn btn-block btn-success"
                    data-toggle="modal"
                    data-target="#new-recipe-modal">Add New Recipe</button>
            </React.Fragment>
        );
    }
}
 
export default Recipes;