import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import PersonList from './postlists';
class App extends Component {
  state = {
    name: '',
    job:''
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeJob(event) {
    this.setState({job: event.target.value});
  }
  handleSubmit(event) {
    var that = this
    axios.post('https://reqres.in/api/users', JSON.stringify({ 'name': this.state.name,'job':this.state.job }))
    .then(function (response) {

      alert("successfully posted")
      that.setState({name:'',job:''})
    })
    .catch(function (error) {
      console.log(error);
    });
    event.preventDefault();
  }

  render(){
    return ( 
      <div className="App">
        <PersonList/>
        <form onSubmit={(e)=>this.handleSubmit(e)} style={{marginLeft:'10%'}}>
          <input type="text" name="fname" value={this.state.name}  onChange={(e)=>this.handleChangeName(e)} style={{paddingRight:10,marginBottom:20,padding:5}} placeholder={'name'}/><br/>
          <input type="text" name="job" value={this.state.job} onChange={(e)=>this.handleChangeJob(e)}style={{paddingRight:10,padding:5,marginBottom:20}} placeholder={'job'}/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;