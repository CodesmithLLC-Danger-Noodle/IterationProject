import React, { Component } from 'react';

class Total extends Component {
    constructor(props){
        super(props);
      }
 
    render(){
      return (
        <div className='total'>
          <div id='butts'>
          Total: ${this.props.total}
          </div>
        </div>
      )
    }
}

export default Total;