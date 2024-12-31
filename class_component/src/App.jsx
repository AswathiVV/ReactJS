import React from "react";


class App extends React.Component{
  constructor(props){
    super()
    this.state={
      colour:'black',
      size:'500px',
      name:props.name
      
    }
  }

  render(){
    return(
      <div>
        <h1>Welcome to class component</h1>
        <p>{this.state.colour}</p>
        <p>{this.state.size}</p>
        <p>{this.state.name}</p>

      </div>
    )
  }
}

export default App