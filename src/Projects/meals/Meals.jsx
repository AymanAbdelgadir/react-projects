import {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => {
                setMeals(res.data.meals);
            }).catch(err => console.log(err));
    })
    const itemslist = meals.map(({strMeal, strMealThumb, idMeal}) =>{
        return(
        <section className='card'>
            <img src={strMealThumb} alt={strMeal}/>
            <section className='content'>
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>)
    })
    return (
        <div className='items-container'>
            {itemslist}
        </div>
    );
};

export default Meals;
