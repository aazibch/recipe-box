import React from 'react';
import Recipe from './Recipe/Recipe';
import Modal from '../Modal/Modal';

const recipeAccordion = (props) => (
    <React.Fragment>
        <Modal label="edit-recipe-modal"
            title="Edit Recipe"
            recipeNameValue={props.recipeNameValue}
            recipeIngredientsValue={props.recipeIngredientsValue}
            recipeNameHandler={props.recipeNameHandler}
            recipeIngredientsHandler={props.recipeIngredientsHandler}
            submitHandler={props.submitEditedRecipeHandler}
            dismissHandler={props.dismissModalHandler} />

        <div id="recipe-accordion" className="mt-4 mb-3">
            {props.recipes.map((recipe, index) => {
                return <Recipe key={index}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                    index={index}
                    editRecipeHandler={props.editRecipeHandler}
                    deleteRecipeHandler={props.deleteRecipeHandler} />
            })}
        </div>
    </ React.Fragment>
)
 
export default recipeAccordion;