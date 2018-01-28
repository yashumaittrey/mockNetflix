import React,{Component} from 'react';

export default class ListOfTitles extends Component {
  render(){
    return(
      <div className="container">
      <h5>Currently in your list</h5>
      <ul>
      {this.props.mylist.map((item,index)=>{
        return(
          <li key={index}>
            <p>{item.title}</p>
          </li>
        );
      })}
      </ul>
      </div>
    )
  }
}
