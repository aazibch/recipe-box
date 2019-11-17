import React from 'react';

const recipe = (props) => (
    <div className="mb-1 card">
        <div className="card-header text-center">
            <h2 className="h6 mb-0">
                <a className="card-link text-dark" data-toggle="collapse" href={"#recipe" + props.index}>
                    {props.name}
                </a>
            </h2>
        </div>
        <div id={"recipe" + props.index} className="collapse" data-parent="#recipe-accordion">
            <div className="card-body p-3">
                <ul className="list-group">
                    {
                        props.ingredients.map((ingredient, index) => {
                            return <li className="list-group-item" key={index}>{ingredient}</li>
                        })
                    }
                </ul>
                <div className="mt-3">
                    <button type="button"
                        className="btn btn-light btn-sm border mr-1"
                        data-target="#edit-recipe-modal"
                        data-toggle="modal"
                        onClick={props.editRecipeHandler.bind(this, props.index)}>Edit</button>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={props.deleteRecipeHandler.bind(this, props.index)}>Delete</button>
                </div>
            </div>
        </div>
    </div>
);
 
export default recipe;