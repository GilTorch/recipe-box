import React from 'react';
import $ from 'jquery';


class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.togglePanel = this.togglePanel.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.state={
            index:this.props.index
        }
    }

    togglePanel() {
        $('#ingredient-list' + this.props.index).slideToggle();
    }

    componentDidMount() {
        console.log(this.state.index);
        $("#ingredient-list" + this.props.index).hide();
        $(".show-dialog").click(function () {
            $("#dialog").show();
        })
    }

    handleEdit(){
        this.props.edit(this.state.index);
    }

    handleDelete(){
        this.props.delete(this.state.index);
    }

    render() {

        const ingredients = this.props.ingredients.map((ingredient, index) => { return <li className="mdl-list__item" key={index}><span className="mdl-list__item-primary-content">{ingredient}</span></li> })

        return (
            <div>
                <div id={"recipe-title-container"} className='recipe-title-container' >
                    <h4><button className="recipe-name-buttons mdl-button mdl-js-button" onClick={this.togglePanel}>{this.props.name}</button></h4>
                    <div className="recipe-action-button-container">
                <button onClick={this.handleEdit} className="show-dialog mdl-button mdl-js-button mdl-button--fab"><i className="material-icons">edit</i></button>
                <button onClick={this.handleDelete} className="mdl-button mdl-js-button mdl-button--fab"><i className="material-icons">delete</i></button>
            </div>
                </div>
                <div id={"ingredient-list" + this.props.index}>
                    {/* <h6>Ingredients</h6> */}
                    <ul className="demo-list-item mdl-list">
                        {ingredients}
                    </ul>
                </div>
            </div>
        )
    }



}

export default Recipe;