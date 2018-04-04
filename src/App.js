import React from 'react';
import './App.css';
import RecipeContainer from './RecipeContainer';
import $ from 'jquery';

class App extends React.Component {




  componentDidMount(){
    $('.show-dialog').click(function(){
        $('#dialog').show();
    })

    $('.close').click(function(){
        $('#dialog').hide();
    })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Designed and coded by <a href="https://www.codepen.io/BlessedCamper">Gilbert</a></h1>
        </header>
        <RecipeContainer/>
      </div>
    );
  }
}



export default App;
