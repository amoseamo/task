import React from "react";
class Count extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment=()=>{
      this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        if(this.state.count > 0){
        this.setState({count:this.state.count-1})
        }
      }
      
    render(){
       return(
        <div>
            <p>count value is:{this.state.count}</p>
            <button onClick={this.increment}>Increament</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
       );
    } 
}
export default Count;