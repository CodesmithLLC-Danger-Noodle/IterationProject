import React, { Component } from 'react';

class TotalsDisplay extends Component {
    constructor(props){
      super(props);
    }

    render(){
      const handleClick = () => {

        // document.body.spin
        var tumbling = [
          // { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' }, 
          // { color: '#431236', offset: 0.3},
          { transform: 'rotate(360deg)' }
        ];
        var revtumbling = [
          // { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' }, 
          // { color: '#431236', offset: 0.3},
          { transform: 'rotate(-360deg)' }
        ];
        
        var timing = {
          duration: 2000,
          iterations: Infinity
        }
        document.getElementById("transactionAmt").animate(
          revtumbling,
          timing
        );

        
        document.getElementById("transactionName").animate(
          tumbling,
          timing
        );

        document.getElementById("category").animate(
          revtumbling,
          timing
        );

        document.getElementById("submitButton").animate(
          tumbling,
          timing
        );
        
        for (let i = 0; i < this.props.transactions.length; i++) {
          document.getElementById(`${i}date`).animate(
            revtumbling,
            timing
          );
          document.getElementById(`${i}name`).animate(
            tumbling,
            timing
          );
          document.getElementById(`${i}category_id`).animate(
            revtumbling,
            timing
          );
          document.getElementById(`${i}amount`).animate(
            tumbling,
            timing
          );
          document.getElementById(`${i}editButton`).animate(
            revtumbling,
            timing
          );
        }
        document.getElementById(`logo`).animate(
          revtumbling,
          timing
        );

        document.getElementById(`butts`).animate(
          tumbling,
          timing
        );

        document.getElementById("pieChart").animate(
          revtumbling,
          timing
        );
        
        document.getElementById("pieChartTotal").animate(
          tumbling,
          timing
        );
        
        document.getElementById("pieChartTotal").animate(
          tumbling,
          timing
        );
        
        document.getElementById("budget").animate(
          revtumbling,
          timing
        );
        document.getElementById("totalSpent").animate(
          tumbling,
          timing
        );

        document.getElementById("remaining").animate(
          revtumbling,
          timing
        );
        document.getElementById("editInput").animate(
          tumbling,
          timing
        );
        document.getElementById("editButton").animate(
          tumbling,
          timing
        );
        document.getElementById("dangerZone").animate(
          revtumbling,
          timing
        );
        document.getElementById("october").animate(
          revtumbling,
          timing
        );
        document.getElementById("date").animate(
          tumbling,
          timing
        );
        document.getElementById("transaction").animate(
          revtumbling,
          timing
        );
        document.getElementById("bob").animate(
          tumbling,
          timing
        );
        document.getElementById("amount").animate(
          revtumbling,
          timing
        );
      }



      return (
        <div className = "totalsDisplay">
          <center>
            <div id="budget">
              <div>
              Budget:
              </div>
              ${this.props.budget}
            </div>
            <div id="totalSpent">
              Total Spent:
              <br></br>
              <center>${this.props.total}</center>
            </div>
            <div id="remaining">
              Remaining:
              <br></br>
              <center>${this.props.budget - this.props.total}</center>
            </div>
            <div id = "editBudgetContainer">
              <input  type = "text" id = "editInput" placeholder = "Enter New Budget"></input>
              <button id="editButton" onClick = {this.props.editBudget}>Edit Budget</button>
              <button id="dangerZone" onClick = {()=>handleClick()}> Danger Zone </button>
            </div>
          </center>
        </div>
      )
    }
}

export default TotalsDisplay;