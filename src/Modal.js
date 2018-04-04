import React from 'react';



const Modal=(props)=>{

    return(
        <div id="dialog" className="mdl-dialog">
            <h4 className="mdl-dialog__title">Add Your Recipes</h4>
            <div className="mdl-dialog__content">
                <form id="recipe-form" action="#" onSubmit={props.submit}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input name="recipe-name" id="recipe-name" value={props.recipeName} onChange={props.handleRecipeNameChange} className="mdl-textfield__input" type="text" id="sample3" />
                        <label className="mdl-textfield__label" htmlFor="recipe-name">Add Recipe name here...</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                        <textarea id="recipe-ingredients" className="mdl-textfield__input" value={props.ingredients} onChange={props.handleIngredientsChange} type="text" rows="3" id="sample5" ></textarea>
                        <label className="mdl-textfield__label" htmlFor="sample5">Add recipe ingredients...</label>
                    </div>
                    <div className="mdl-dialog__actions">
                        <button type="submit" className="mdl-button">Add Recipe</button>
                        <button type="button" className="mdl-button close">Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
} 

export default Modal;



 