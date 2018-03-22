import React, { Component } from 'react';

import CssBaseline from 'material-ui/CssBaseline';
import Header from './common/Header';
import Products from './Products';

class Main extends Component {

    constructor () {

        super();

        this.state = {
            products: []
        };

}

    componentDidMount () {

        fetch('/api/products').
        then((res) => res.json()).
        then((products) => {

            this.setState({products});

});

}

    render () {

        return (
            <div>
            <CssBaseline />
            <Header />
            <Products products={this.state.products}/>
            </div>
        );

}

}

export default Main;