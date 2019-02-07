import React,{ Component } from 'react';
import { log } from 'util';

export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            menu : ['home','form', 'table', 'catalog']
        };
        this.routerComp = this.routerComp.bind(this);
    }
    routerComp = path => {
        // alert(path);
        if(path != 'home') {
            return window.location.href = "http://localhost:3000/" + path;
        } else {
            return window.location.href = "http://localhost:3000/";
        }
    }
    render() {
        return(
        <nav className="navbar navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid">
                <span>
                    {this.state.menu.map(data => 
                <button className="btn btn-dark" onClick={this.routerComp.bind(this,data)}>{data.toLocaleUpperCase()}</button>
                    )}
                </span>

                <span>
                    <button className="btn btn-outline-danger" onClick={this.routerComp.bind(this,'contact')}>CONTACT</button>
                </span>
            </div>
        </nav>
        );
    }
}