import React, { Component,useState,useEFfect } from 'react'
import Board from "./components/Board"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const winning = (squares) => {
  let winningArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],

  ]
  for(let i=0;i<winningArray.length;i++){
    const [a,b,c] = winningArray[i]
    if(squares[a] && squares[a]===squares[b] &&squares[a]===squares[c]){
      return squares[a]
    }
  }
}
// -- Begin of Board Component
//End of Game
//Apps Component
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: [],
      stepNumber: 0,
      xIsNext: true,
      score:0,
      userName: "",
      highScore:[],
      squares:Array(9).fill(null),
    }
  }
  
componentDidMount(){
}
boxClick =(id) => {
   let array = this.state.squares
  // const taken = this.state.history.slice(0,this.state.stepNumber+1)
  // const current = taken[taken.length - 1];
  // const square = current.squares.slice();
  if(this.state.xIsNext){
    array[id]="O"
    
  } else if(!this.state.xIsNext){
    array[id]="X"
  }
  if(winning(array)){
    alert(`${array[id]} have won!`)
  }
  this.setState({ 
      xIsNext:!this.state.xIsNext,
      squares:array
    }
  )
}


/*this.setState({
  history: history.concat(
    {
      squares:squares
    }
  ),
  stepNumber:history.length,
  xIsNext:!this.state.xIsNext,
  })*/
  render() {
    return (
      <div class="row">
      <div class="col-6 col-md-4"></div>
      <div class="col-6 col-md-4">
        
      <h3 class="h3 text-center m-5">TicTacToe</h3>
        <Board {...this.state} onClick={(id)=>this.boxClick(id)}/>
      <div class="col-6 col-md-4">History</div>
    </div>
    </div>
        
    )
  }
}
