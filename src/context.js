import React, { Component } from 'react';
import Axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: [],
        cart: [],
        cartTotal: 0,
    };

    componentDidMount() {
        this.setProducts();
    };

    setProducts = () => {
        Axios.get('http://localhost:3000/products')
		.then(response => {
            this.setState(() => {
                return {products: response.data}
            })
		});
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    // handleDetails = id => {
    //     const product = this.getItem(id);
    //     this.setState(() => {
    //         return {detailProduct:product};
    //     })
    // };

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {products:tempProducts, cart: [...this.state.cart, product]};
        }, () => {
            this.addTotal();
        })
    };

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotal();
        })
    };

    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotal();
            })
        }
    };

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotal();
        });
    };

    clearCart = () => {
        this.setState(() => {
            return {cart: []};
        }, () => {
            this.setProducts();
            this.addTotal();
        });
    };

    addTotal = () => {
        let total = 0;
        
        this.state.cart.map(item => {
            total += Number(item.total);
            console.log(item);
        });
        this.setState(() => {
            return {
                cartTotal: total
            };
        });
    };

    render() {
        return(
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetails: this.handleDetails,
                    addToCart: this.addToCart,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};