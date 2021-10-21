import React, { Component } from 'react';
import FeedItem from "../components/feedItem.jsx";
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/Total.jsx';



class DisplayContainer extends Component {
    constructor(props){
      super(props);
    }

    render(){
      return (
        <div className = "displayContainer">
          <h3>October Spending:</h3>
          <FeedItem delete={this.props.delete} state={this.props.state} update={this.props.update}/>
          <Total total = {this.props.state.total}/>
          <div id="chartContainer">
            <TotalsDisplay budget={this.props.state.budget} total={this.props.state.total} editBudget={this.props.editBudget}/>
            <PieChart transactions={this.props.state.transactions} total={this.props.state.total}/>
          </div>
        </div>
      )
    }
}

export default DisplayContainer;