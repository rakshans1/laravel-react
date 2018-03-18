import React, { Component } from 'react';

import CssBaseline from 'material-ui/CssBaseline';
import Header from './common/Header'

class Main extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('/api/products')
        .then(res => res.json())
        .then(products => {
            this.setState({products})
        })
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                <li key={product.id}>{product.title}</li>
            )
        });
    }

    render() {
        return (
            <div>
            <CssBaseline />
            <Header />
                <ul>
                    {this.renderProducts()}
                </ul>
            </div>
        )
    }
}

export default Main;