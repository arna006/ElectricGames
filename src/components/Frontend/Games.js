import React, { useEffect, useState } from 'react'

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames();
    }, [])
    const getAllGames = async () => {
        await fetch("https://localhost:7247/api/games")
            .then((response) => response.json())
            .then((data) => {
                setGames(data);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }
    return (
        <>
            <div className="gamesRow">
                <h1 className='title'>All Available Games</h1>
                {games.map((game) => {
                    return (
                        <div className="gamesColumn">
                            <div className="gameCard">
                                <img alt='' src="https://picsum.photos/450/300" />
                                <div className="gameCardData">
                                    <span className='gameYear'>{game.releaseYear}</span>
                                    <h3 className='gameTitle'>{game.title}</h3>
                                    <div className='gamePlateform'>
                                        <h4>Game Plateform : </h4>
                                        <p>{game.plateform}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </>
    )
}

export default Games