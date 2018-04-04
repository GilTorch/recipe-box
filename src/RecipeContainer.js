import React from 'react';
import Recipe from './Recipe';
import Modal from './Modal';

class RecipeContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recipes:[{name:"Rice and Beans",ingredients:["rice","water","salt","beans"]},{name:"Spaguetti",ingredients:["spaguetti","water","salt"]}],
            editAtIndex: '',
            recipeNameValue: '',
            ingredientsValue: ''
        }

        this.addRecipe = this.addRecipe.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
        this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    }

    handleRecipeNameChange(event) {
        this.setState({
            recipeNameValue: event.target.value
        })
    }

    handleIngredientsChange(event) {
        this.setState({
            ingredientsValue: event.target.value
        })
    }

    addRecipe(event) {
        event.preventDefault();
        var recipeName = this.state.recipeNameValue;
        var ingredientsName = this.state.ingredientsValue;
        var indexToEdit = this.state.editAtIndex;

        if (recipeName && ingredientsName) {
            var recipeCopy = this.state.recipes;

            if (indexToEdit !== '') {

                recipeCopy.splice(indexToEdit, 1, { name: recipeName, ingredients: ingredientsName.split(',') });
                console.log(recipeCopy);
            }
            else {
                recipeCopy.push({ name: recipeName, ingredients: ingredientsName.split(',') });
                localStorage.recipes = JSON.stringify(recipeCopy);
            }

            localStorage.recipes = JSON.stringify(recipeCopy);
            console.log(localStorage.recipes);

            this.setState({
                recipes: recipeCopy,
                recipeNameValue: '',
                ingredientsValue: '',
                editAtIndex: '',
            })
        }

    }


    handleEdit(index) {
        const recipeCopy=this.state.recipes;
        console.log(recipeCopy[0].name);

        const ingredients=recipeCopy[index].ingredients.length>1?recipeCopy[index].ingredients.join(','):recipeCopy[index].ingredients[0];

        this.setState({
            editAtIndex: index,
            recipeNameValue:recipeCopy[index].name,
            ingredientsValue:ingredients
        })
    }

    handleDelete(index) {

        const recipeCopy = this.state.recipes;
        recipeCopy.splice(index, 1);
        this.setState({
            recipes: recipeCopy
        })

        localStorage.recipes = JSON.stringify(recipeCopy);

    }


    componentDidMount() {

        if (localStorage.recipes && localStorage.recipes.length) {
            console.log('THERE IS STORAGE' + localStorage);
            this.setState({
                recipes: JSON.parse(localStorage.recipes)
            })
        }
    }


    render() {
        const that = this;
        const recipes = this.state.recipes.map(function (recipe, index) {
            return (
                <Recipe info={recipe} index={index} key={index} name={recipe.name} ingredients={recipe.ingredients} edit={that.handleEdit} delete={that.handleDelete} />
            )
        });

        return (
            <div>
                <div className="recipe-container demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="recipe-container-title mdl-card__title">
                        <h1 className="recipe-container-title">Recipe Box</h1>
                    </div>
                    <div className="mdl-card__supporting-text">
                        Welcome, please add, view, edit and delete your recipes!!
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button className="show-dialog mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                    {recipes}
                </div>
                <div id="dialog-container">
                    <Modal submit={this.addRecipe} recipeName={this.state.recipeNameValue} handleRecipeNameChange={this.handleRecipeNameChange} ingredients={this.state.ingredientsValue} handleIngredientsChange={this.handleIngredientsChange} />
                </div>
            </div>
        )

    }



}

export default RecipeContainer;