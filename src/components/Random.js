import React from 'react'
import axios from 'axios';
import '../asset/Random.css'

// const API = 'https://www.themealdb.com/api/json/v1/1/random.php';

export class Random extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meals: [],
        };
    }
    getMeal() {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => {
                console.log(response)
                this.setState({ meals: response.data.meals })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { meals } = this.state
        return (
            <div className="conTent">
                <div className="header">
                    <h1>Feeling hungry?</h1>
                    <h3>Get a random meal by clicking below</h3>
                    <button className="get-meal" onClick={this.getMeal.bind(this)}>Get Meal 🍔</button>
                </div>

                <div className="conTent-right">
                    {meals.map(meal =>
                        <div key={meal.idMeal}>
                            <h2 className="hungry">{meal.strMeal}</h2>
                            <div className="guide1">
                                <div className="img">
                                    <img src={meal.strMealThumb} className="img-thumb" />
                                </div>
                                <div className="instructions">
                                    <h4>Instructions for preparation</h4>
                                    <p>{meal.strInstructions}</p>
                                </div>
                            </div>
                            <div className="guide2">
                                <div className="ingredient">
                                    <h4>Ingredients</h4>
                                    <ul>
                                        <li>{meal.strIngredient1}</li>
                                        <li>{meal.strIngredient2}</li>
                                        <li>{meal.strIngredient3}</li>
                                        <li>{meal.strIngredient4}</li>
                                        <li>{meal.strIngredient5}</li>
                                        <li>{meal.strIngredient6}</li>
                                        <li>{meal.strIngredient7}</li>
                                    </ul>
                                </div>
                                <div className="video-resource">
                                    <h3>Video Recipe</h3>
                                    <iframe width="420" height="315" src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}>

                                    </iframe>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Random;