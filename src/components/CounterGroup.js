import React from 'react';
import Counter from './Counter';
import './CounterGroup.css';


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

    renderCounters = () => {
        let counters = [];
        for (let count = 0; count < this.state.counterCounts ; count ++ ){
            counters.push(
                <Counter
                key = {count}
                onCounterValueChange={this.counterUpdateCallback}/>
            )
        }
    }

    regenerateCounters = () => {
        this.setState({ counterCounts : this.state.inputValue}) 
        console.log(this.state.counterCounts);
    }

    render () {
        let counters = this.renderCounters();

        return (  
            <div className="counter-group">
                <div className="regenerate">
                  <input type ="text" value={this.state.inputValue} onChange={this.updateInputValue}/>
                  <button onClick={this.regenerateCounters} > Regenerate Counters
                </button >
               <span>Sum: 0 </span>
            </div>
            <div>
             {counters}
            </div>
        </div> 
        );
      }
      

}
export default CounterGroup;