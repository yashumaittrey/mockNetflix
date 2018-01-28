import React,{Component} from 'react';

export default class Header extends Component {
  render(){
    return(
      <header>
             <nav className="navbar navbar-default header-custom">
               <div className="container-fluid ">
                 <div className="navbar-header">
                   <a className="logo-custom" href="javascript:void(0)">{this.props.pageTitle}</a>
                 </div>
               </div>
             </nav>
       </header>
    );
  }
}
