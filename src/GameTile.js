import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';  // Ensure your styles are imported

function GameTiles() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://api.studio1v1.com/trivia/home/')
            .then(response => {
                console.log('API response:', response.data); // Debug the response
                if (response.data && Array.isArray(response.data.games)) {
                    setGames(response.data.games); // Access the nested games array
                } else {
                    console.error('API response does not contain games array:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const fib_url = 'http://playdaily.gg.s3-website.ap-south-1.amazonaws.com/?gameId=FIB';

    return (
        <div className="game-tiles-container">
            {games.map((game, index) => (
                <div className={`game-tile game-tile-${index % 4}`} key={index}>
                    <a href={fib_url}>
                        <img src={game.banner_url} width="100%" alt="Game Image" />
                    </a>
                    <p>{game.title || 'Untitled Game'}</p> {/* Provide a default title if empty */}
                </div>
            ))}
        </div>
    );
}

export default GameTiles;
