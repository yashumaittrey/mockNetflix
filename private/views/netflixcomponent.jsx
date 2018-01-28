import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import RenderList from './renderList.jsx';
import ListOfTitles from './listOfTitles.jsx';

export default class ReactNetflix extends Component {
  constructor(){
    super();
    this.state = {data:{
    "mylist": [
        {
            "title": "Futurama",
            "id": 1,
            "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
        },
        {
            "title": "The Interview",
            "id": 2,
            "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
        },
        {
            "title": "Gilmore Girls",
            "id": 3,
            "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
        }
    ],
    "recommendations": [
        {
            "title": "Family Guy",
            "id": 4,
            "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
        },
        {
            "title": "The Croods",
            "id": 5,
            "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
        },
        {
            "title": "Friends",
            "id": 6,
            "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
        }
    ]
}};
  }
  removeChoice(itemId){
    var mylist = this.state.data.mylist;
    var recommendations = this.state.data.recommendations;
    mylist.map((item,index)=>{
      if(item.id==itemId){
        mylist.splice(index,1);
        recommendations.push(item);
      }
    })
    var newState = Object.assign({},this.state.data,{mylist:mylist,recommendations:recommendations});
    this.setState({data:newState});
  }
  addChoice(itemId){
    var mylist = this.state.data.mylist;
    var recommendations = this.state.data.recommendations;
    recommendations.map((item,index)=>{
      if(item.id==itemId){
        mylist.push(item);
        recommendations.splice(index,1);
      }
    })
    var newState = Object.assign({},this.state.data,{mylist:mylist,recommendations:recommendations});
    this.setState({data:newState});
  }
  render(){
    return(
      <div>
        <Header pageTitle="React Netflix Mock"/>
        <div className="container">
        <div>
        <RenderList listData={this.state.data.mylist} listName="My List" button="Remove" buttonAction={this.removeChoice.bind(this)}/>
        </div>
        <div>
        <RenderList listData={this.state.data.recommendations} listName="Recommendations" button="Add" buttonAction={this.addChoice.bind(this)}/>
        </div>
        <div>
        <ListOfTitles mylist={this.state.data.mylist}/>
        </div>
        </div>
      </div>
    );
  }
}
