import React from 'react';
import './Counter.css';

class Counter extends React.Component {
     constructor(props){
        super(props);
        this.state = {count: 0};
      }

     increaseNumber = () => 
     {
        this.setState({number : this.state.count + 1});
        this.props.onCounterValueChange(1);
     } ;

     decreaseNumber = () => 
     {
        this.setState({number : this.state.count - 1});
        this.props.onCounterValueChange(-1);
     } ;

      render () {
        return (   <div><button onClick= {this.increaseNumber}> + </button>
                          <span>Number : {this.state.count} </span>
                         <button onClick= {this.decreaseNumber}> - </button>
            </div>
        );
      }
      
}
export default Counter;