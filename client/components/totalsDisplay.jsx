import React, { Component } from 'react';

class TotalsDisplay extends Component {
    constructor(props){
      super(props);
    }

    render(){
      
      return (
        <div className = "totalsDisplay">
          <center>
            <div>
              Budget:
              <br></br>
              {this.props.budget}
            </div>
            <div>
              Total Spent:
              <br></br>
              <center>${this.props.total}</center>
            </div>
            <div>
              Remaining:
              <br></br>
              <center>${this.props.budget - this.props.total}</center>
            </div>
            <div id = "editBudgetContainer">
              <input  type = "text" id = "editInput" placeholder = "Enter New Budget"></input>
              <button id="editButton" onClick = {this.props.editBudget}>Edit Budget</button>
            </div>
          </center>
        </div>
      )
    }
}

export default TotalsDisplay;