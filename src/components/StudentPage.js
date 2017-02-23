require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', passcode:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({passcode:true})
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      if(this.state.passcode == true){
        <Videos url='https://s3.amazonaws.com/studenttoolbox/D.Romero_February+SLC.mov'/>
      }
    </div>
    );
  }
}



export default NameForm;
