// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function GameTiles() {
//     const [games, setGames] = useState([]);

//     useEffect(() => {
//         // Fetch data from the API
//         axios.get('https://api.studio1v1.com/trivia/home/')
//             .then(response => {
//                 console.log('API response:', response.data); // Debug the response
//                 if (response.data && Array.isArray(response.data.games)) {
//                     setGames(response.data.games); // Access the nested games array
//                 } else {
//                     console.error('API response does not contain games array:', response.data);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     return (
//         <div className="game-tiles-container">
//             {games.map((game, index) => (
//                 <div className="game-tile" key={index}>
//                     <a href={game.url}>
//                         <img src={game.banner_url} width="100%" alt="Game Image" />
//                     </a>
//                     <p>{game.title || 'Untitled Game'}</p> {/* Provide a default title if empty */}
//                 </div>
//             ))}
//         </div>
//     );
// }

import React from 'react';
import gamesData from './game-data-test';  // Import the data from gameData.js

function GameTiles() {
    return (
        <div className="game-tiles-container">
            {gamesData.map((game, index) => (
                <div className={`game-tile game-tile-${index % 4}`} key={index}> {/* Use index to loop through styles */}
                    <a href={game.url} className="game-image-link">
                        <img src={game.banner_url} width="100%" alt="Game Image" />
                        <div className="game-title">{game.title || 'Untitled Game'}</div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default GameTiles;

