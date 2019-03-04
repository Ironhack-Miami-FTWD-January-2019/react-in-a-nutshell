
import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard'; // <== don't forget to import 

class DynamicMoviesList extends Component {
    state = {
        movies: [
            { title: "The Godfather", director: "Francis Coppola" },
            { title: "Star Wars", director: "Rian Johnson" },
            { title: "The Shawshank Redemption", director: "Frank Darabont" }
        ]
    }

    deleteMovieHandler = (movieIndex) => {
        const moviesCopy = this.state.movies;
        moviesCopy.splice(movieIndex, 1); 
        this.setState({
            movies: moviesCopy  
        })
    }

    render() {
        // leave this console.log() so we can keep track of our state inside our browser's console
        console.log(this.state.movies);
        return (
            <div>
                adfdsf
                {
                    this.state.movies.map((oneMovie, index) => {
                        return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
                    })
                }
                {/* <button onClick={()=>this.deleteMovieHandler(0)}>Splice the Godfather</button> */}
            </div>
        );
    }
}

export default DynamicMoviesList;