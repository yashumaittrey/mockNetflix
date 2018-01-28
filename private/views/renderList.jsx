import React,{Component} from 'react';

export default class RenderList extends Component {
  constructor(){
    super();
    this.state = {
      itemHoveredOn: ""
    };
  }
  showButton(itemId){
    this.setState({itemHoveredOn:itemId});
  }
  hideButton(){
    this.setState({itemHoveredOn:""});
  }
  render(){
    var buttonText = this.props.button;
    var hideButton = this.hideButton.bind(this);
    var showButton = this.showButton.bind(this);
    return(
      <div className="container">
      <h5>{this.props.listName}</h5>
      {(()=>{
        if(this.props.listData.length>0){
          return(
            <div>
            {this.props.listData.map((item,index)=>{
              return(
                <div className="panel panel-default item-custom" key={index} onMouseOver={()=>{showButton(item.id)}} onMouseOut={()=>{hideButton()}}>
                <p>{item.title}</p>
                <div>
                <img src={item.img}/>
                </div>
                <div className="button-custom">
                <button type="button" className={buttonText=="Add"?"btn btn-outline-success":"btn btn-outline-danger"} style={this.state.itemHoveredOn==item.id?{visibility:"visible"}:{visibility:"hidden"}} onClick={()=>{this.props.buttonAction(item.id)}}>{buttonText}</button>
                </div>
                </div>
              );
            })}
            </div>
          );
        }
        else{
          if(this.props.listName=="Recommendations"){
            return(
              <div>
              <h4>Nothing to show!</h4>
              </div>
            );
          }
          else{
            return(
              <div>
              <h4>Nothing in your list currently, choose from recommendations shown below.</h4>
              </div>
            )
          }
        }
      })()}
      </div>
    );
  }
}
