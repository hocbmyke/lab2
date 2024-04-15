import React from 'react';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';
import productImage from './assets/p.webp';

const App = () => {
    const products = [
        {
            name: "Товар 1",
            price: 19.99,
            description: "Опис для товару 1",
            image: productImage
        },
        {
            name: "Товар 2",
            price: 29.99,
            description: "Опис для товару 2",
            image: productImage
        },
        {
            name: "Товар 3",
            price: 39.99,
            description: "Опис для товаур 3",
            image: productImage
        }
    ];

    return (
        <div className="app">
            <h1 className="app-title">Вітаємо у нашому магазині!</h1>
            <ProductList products={products} />
            <Footer />
        </div>
    );
}

export default App;