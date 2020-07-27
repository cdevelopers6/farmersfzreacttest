import React from 'react';
import './App.css';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://reqres.in/api/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons)
        this.setState({ persons: persons.data });
      })
  }

  deleteItem=(itemid)=>{
    axios.delete(`https://reqres.in/api/users/${itemid}`)
      .then(res => {
        alert("successfully deleted")
      })
  }

  render() {
  
  return(  
      <div>
          <h1>Staff Details</h1>
          <ul>
          {this.state.persons.map(item => (
            <div>
              <ul class = "lists" key={item.id}>
                <li><b><span>Name : </span>{item.first_name} {item.last_name}</b></li>
                <li><span>Email : </span>{item.email}</li>
                <li><span>Avatar : </span><a href="#">{item.avatar}</a></li>
                <a href='#' onClick={()=>this.deleteItem(item.id)} style={{padding:10,marginTop:10}}>Delete</a>
              </ul>
            </div>
            ))}
          </ul>
      </div>
    )
  }
}