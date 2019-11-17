import React from 'react';

const modal = (props) => (
    <div className="modal fade" id={props.label} role="dialog" aria-labelledby={props.label} aria-hidden="true" onClick={props.dismissHandler}>
        <div className="modal-dialog" role="document" onClick={(event) => event.stopPropagation()}>
            <div className="modal-content">

                <div className="modal-header">
                    <h2 className="modal-title h5">{props.title}</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.dismissHandler} >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <form onSubmit={(event) => {event.preventDefault()}}>
                        <div className="form-group">
                            <label htmlFor="recipe-name">Recipe Name:</label>
                            <input type="text"
                                className="form-control"
                                id="recipe-name"
                                onChange={props.recipeNameHandler}
                                value={props.recipeNameValue}
                                placeholder={props.recipeNamePlaceholder} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ingredients">Ingredients:</label>
                            <textarea
                                className="form-control"
                                id="ingredients"
                                onChange={props.recipeIngredientsHandler}
                                value={props.recipeIngredientsValue}
                                placeholder={props.recipeIngredientsPlaceholder} />
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.submitHandler}>Submit</button>
                </div>
            </div>
        </div>
    </div>
);
 
export default modal;