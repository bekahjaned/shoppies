import React from 'react';
import axios from 'axios';
import './index.css';

import MovieItem from '../MovieItem/';
import Button from '../Button/';
import PopUp from '../PopUp/';

const apiKey = process.env.REACT_APP_KEY;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            results: [],
            nominations: [],
            errorMessage: '',
        };
    };

    getMovies = async () => {
        const url = `http://www.omdbapi.com/?s=${this.state.searchTerm}&type=movie&apikey=${apiKey}`

        try {
          let data = await axios.get(`${url}`)
            .then(({ data }) => data);
            let results = data.Search;
            if(results === undefined) {
                this.setState({
                    results: [],
                    errorMessage: `Sorry, there are no results for "${this.state.searchTerm}", please try another search`
                });
            } else {
                this.setState({ 
                    results,
                    errorMessage: ''
                });
            }
                
        } catch (err) {
          console.log(err);
        };
    };

    getSearchTerm = (event) => {
        const searchTerm = event.target.value;
        this.setState({
            searchTerm
        })
    }

    nominationsList = new Set();

    nominateMovie = (index) => {
        let nominatedMovie = this.state.results[index];
        this.nominationsList.add(nominatedMovie);
        let nominations = [...this.nominationsList];
        this.setState({
            nominations,
        });   
    };

    removeNomination = (index) => {
        let removedMovie = this.state.nominations[index];
        this.nominationsList.delete(removedMovie);
        let nominations = [...this.nominationsList];
        this.setState({
            nominations,
        });
    }


    render() {
        const { searchTerm, results, nominations, errorMessage } = this.state

        return (
            <div>
                <div className="search">
                    <input 
                        type="text"
                        placeholder="Search..." 
                        onChange={this.getSearchTerm.bind(this)}
                    />
                    <Button 
                        searchClass="search"
                        buttonText="Search"
                        action={this.getMovies.bind()}
                    />
                </div>
                {nominations.length >= 5 && <PopUp />}
                <div className="panels">
                    <div className="panelItem">
                        <h2>Results for "{searchTerm}"</h2>
                        <h3>{errorMessage}</h3>
                        {results.map((result, index) => 
                            <MovieItem 
                                index={index}
                                key={result.imdbID}
                                title={result.Title}
                                year={result.Year}
                                buttonText="Nominate"
                                action={this.nominateMovie.bind(this, index)}
                            />
                        )}  
                    </div>
                    <div className="panelItem">
                        <h2>Nominations</h2>
                        {nominations.map((result, index) => 
                            <MovieItem 
                                index={index}
                                key={result.imdbID}
                                title={result.Title}
                                year={result.Year}
                                buttonText="Remove"
                                action={this.removeNomination.bind(this, index)}
                            />
                        )} 
                    </div>
                </div>
            </div>
        );
    }
};

export default Dashboard;