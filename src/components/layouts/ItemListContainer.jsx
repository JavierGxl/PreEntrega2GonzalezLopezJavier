import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import "../../App.css"
            
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
    fetch("../json/products.json")
    .then(response => response.json())
    .then(items => {
    const cardItem = items.map(item => 
        <div className="card border-primary mb-3 itemCards" style={{maxWidth: '20rem'}} key={item.id}>
            <div className="card-header">{item.Title}</div>
            <img src={`../img/${item.img}`} className="card-img-top" alt={item.Title} />
            <div className="card-body">
                <h4 className="card-title">${item.Price}</h4>
                <p className="card-text">{item.Desc}</p>
                <button className='btn btn-dark'><Link className='nav-link' to={`/item/${item.id}`}>Ver Producto</Link></button>
            </div>
        </div>)
                
            setItems(cardItem)
            })
    }, []);


    return (
        <div className="row">
            {items}     
        </div>      
        
    );
}


export default ItemListContainer;
