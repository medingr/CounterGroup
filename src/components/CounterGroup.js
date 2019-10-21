import React from 'react';
import Counter from './Counter';
import '../css/CounterGroup.css';
import '../css/Counter.css';


class CounterGroup extends React.Component {
    constructor(props){
        super(props);
        this.state = {counterCounts : this.props.defaultCounts , 
                    inputValue : this.props.defaultCounts ,
                    sum: 0};
    }

    counterUpdateCallback = changeNum  => {
        this.setState({sum : this.state.sum + changeNum})
    }

    updateInputValue = (event) =>  {
        this.setState({
          inputValue: event.target.value
        });
      }

    regenerateCounters = () => {
        this.setState({ counterCounts : this.state.inputValue}) 
        console.log(this.state.counterCounts);
    }


    renderCounters = () => {
        let counters = [];
        for (let count = 0; count < this.state.counterCounts ; count ++ ){
            counters.push(
                <Counter
                key = {count}
                onCounterValueChange={this.counterUpdateCallback}/>
            )
        }
        return counters;
    }


    render () {
        let counters = this.renderCounters();

        return (  
            <div className="counter-group">
                <div className="regenerate">
                  <input value={this.state.inputValue} type="text" onChange={this.updateInputValue}/>
                  <button onClick={this.regenerateCounters} > Regenerate Counters
                </button >
               <span>Sum: {this.state.sum} </span>
            </div>
            <div>
             {counters}
            </div>
           </div> 
        );
      }
      

}
export default CounterGroup;