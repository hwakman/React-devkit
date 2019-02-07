import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

export default class App extends Component {
    render(){
        return(
            <Fragment>
                <div className="container">
                    <nav className="navbar navbar-dark bg-dark fixed-top shadow">
                        <div className="container-fluid">
                            <span>
                                <button className="btn btn-dark">Home</button>
                                <button className="btn btn-dark">Form</button>
                                <button className="btn btn-dark">Table</button>
                                <button className="btn btn-dark">Catalog</button>
                            </span>

                            <span>
                                <button className="btn btn-outline-danger">Contact</button>
                            </span>
                        </div>
                    </nav>

                    <div className="h1 mb-3">
                    Wellcome to React Bootstrap dev-kit .
                    </div>

                    <div className="h6 p-2 bg-dark rounded mb-3">
                        This application base on React with Next.js <br/>
                        And used Bootstrap4 to be base CSS Framwork .
                    </div>

                    <div className="p-2 d-flex justify-content-around">
                        <span><a href="https://nextjs.org/docs/">Next JS ( Documentation )</a></span>
                        <span><a href="https://reactjs.org/docs/getting-started.html">React JS ( Documentation )</a></span>
                        <span><a href="https://getbootstrap.com/docs/4.2/getting-started/introduction/">Bootstrap4 ( Documentation )</a></span>
                    </div>
                </div>
            </Fragment>
        )
    }
}