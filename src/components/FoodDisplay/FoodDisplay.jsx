import React, { useContext } from 'react';
import "./FoodDisplay.css";
import { StoreContext } from '../../Contaxt/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div id='food-display' className='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className='food-display-list'>
                {
                    food_list
                        .filter(item => category === "All" || category === item.category)
                        .map((item, index) => (
                            <FoodItem 
                                key={index} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                image={item.image} 
                                price={item.price} 
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default FoodDisplay;