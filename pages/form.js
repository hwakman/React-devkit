import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import NavBar from './component/nevBar';

export default class Form extends Component {
    render(){
        return(
            <Fragment>
                <NavBar />
                <div className="container">
                    <div className="h1 mb-3">
                    Welcome Form Pages .
                    </div>
                </div>
            </Fragment>
        )
    }
}