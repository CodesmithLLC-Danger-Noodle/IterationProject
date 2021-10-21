import React, { Component } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';

import logo from '../../Pockets-logo.png';


class MainContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        transactions: [],
        total: 0,
        budget: 5000
      };

      this.submit = this.submit.bind(this);
      this.delete = this.delete.bind(this);
      this.update = this.update.bind(this)
      this.editBudget = this.editBudget.bind(this);
    }
  

  // change this to componentDidUpdate
  componentDidMount() {
    fetch('api/transactions')
      .then( response => response.json())
      .then( data => {
        // console.log('received data', data);
        this.setState({
          transactions: data.data,
          total: data.total,
          budget: data.budget
        });
        // console.log('new state', this.state);
      })
      .catch(err => {
        console.log('error fetching transaction data', err);
      })
  };

  update(t_id, item_cat) {
    console.log(item_cat);
    const payload = prompt("Please enter the new value", "value");
    const catList = ['Housing/Rent', 'Utilities', 'Gas', 'Groceries', 'Dining Out', 'Drinks', 'Entertainment', 'Savings', 'Other'];
    // if (item_cat === 'category' && !catList.includes(payload)) return alert("That is not a valid category");
    // if (item_cat === 'date' && typeof payload !== 'string') return alert("Please enter a valid string");
    // if (item_cat === 'amount' && typeof payload !== 'number') return alert("Please enter a valid bigint");
    fetch ('api/transactions', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: t_id,
        type: item_cat,
        payload: payload
        //additional body properties will depend on how many buttons we use
      })
    })
    .then(data => data.json())
    .then(res => {
      this.setState({
        //THIS.STATE OR JUST STATE????
        ...this.state, 
        transactions: res.data,
        total: res.total,
      });
    })
    .catch(err => console.log(err));
  };
  
  delete(t_id) {
      fetch('/api/transactions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: t_id,
        })
      })
      .then(data => data.json()) 
      .then(res => 
        // console.log("what the fuck"))
        
        {
        this.setState({
          ...state,
          transactions: res.data,
          total: res.total,
        });
      })// added set state to re-render
      
      .catch(err => console.log(err));
  };


    submit(){
      console.log('submit activated')
      if(document.getElementById('category').value !== "1"){
        fetch('/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: document.getElementById('transactionName').value,
            amount: document.getElementById('transactionAmt').value,
            date: new Date().toLocaleDateString(),
            category_id: document.getElementById('category').value
          })
        })
        .then(response => response.json())
        .then(data => {
          const transactions = data.data;
          this.setState({
            ...this.state, 
            transactions: transactions,
            total: data.total
          });
        })
        .catch(err => console.log(err));
      }
      else{
        alert('CHOOSE A FUCKING CATEGORY, BITCH');
        console.log('submit was clicked while category was still "choose category"');
      }
    };

    editBudget (){
      console.log('edit Budget function', document.getElementById('editInput').value);
      // const newBudget = document.getElementById('editBudget').value;
      fetch('/api/account', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          budget: document.getElementById('editInput').value
        })
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          ...this.state, 
          budget: data.budget
        });
      })
      .catch(err => console.log(err));
      
    }



    render(){
      return (
        <div className = 'mainContainer'>
          <img src={logo} id="logo"/>
          <InputsContainer submit={this.submit}/>
          <DisplayContainer delete={this.delete} update={this.update} state={this.state} editBudget={this.editBudget}/>
        </div>
      )
    };
}

export default MainContainer;