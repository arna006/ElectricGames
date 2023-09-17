import React, { useEffect, useState } from 'react'

const GameCharacters = () => {
    const [gameCharacters, setGameCharacters] = useState([]);

    useEffect(() => {
        getAllGameCharacters();
    }, [])
    const getAllGameCharacters = async () => {
        await fetch("https://localhost:7247/api/gamescharacters")
            .then((response) => response.json())
            .then((data) => {
                setGameCharacters(data);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }
    return (
        <>
            <div className="gamesRow">
                <h1 className='title'>All Available Games Characters</h1>
                {gameCharacters.map((gameCharacter) => {
                    return (
                        <div className="gamesColumn">
                            <div className="gameCard">
                                <img alt='' src="https://picsum.photos/450/300" />
                                <div className="gameCardData">
                                    <h3 className='gameTitle'>{gameCharacter.name}</h3>
                                    <div className='gamePlateform'>
                                        <h4>Game Name : </h4>
                                        <p>{gameCharacter.game}</p>
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



export default GameCharacters