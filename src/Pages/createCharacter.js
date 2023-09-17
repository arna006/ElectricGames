import React, { useEffect, useState } from 'react'
import GameCharacter from '../components/Admin/GameCharacter';
import GameCharacterCreate from '../components/Admin/GameCharacterCreate';
import Navbar from '../components/Frontend/Navbar';

const CreateCharacter = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters();
    }, [])
    const getAllCharacters = async () => {
        await fetch("https://localhost:7247/api/gamescharacters")
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }
    const onAddCharacter = async (name, game, image) => {
        await fetch("https://localhost:7247/api/gamescharacters", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                game: game,
                image: image
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (response.status !== 201) {
                    return;
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                setCharacters((characters) => [...characters, data]);
            })
            .catch((error) => console.log(error));
    };
    const onDeleteCharacter = async (id) => {
        await fetch(`https://localhost:7247/api/gamescharacters/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                if (response.status !== 200) {
                    return;
                } else {
                    setCharacters(
                        characters.filter((character) => {
                            return character.id !== id;
                        })
                    );
                }
            })
            .catch((error) => console.log(error));
    };
    const onEditCharacter = async (id, name, game, image) => {
        await fetch(`https://localhost:7247/api/gamescharacters/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                game: game,
                image: image
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    return;
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                const updatedCharacters = characters.map((character) => {
                    if (character.id === id) {
                        character.name = name;
                        character.image = image;
                        character.game = game;
                    }
                    return character;
                });
                setCharacters((characters) => updatedCharacters);
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            <Navbar />
            <GameCharacterCreate onAddGame={onAddCharacter} />

            <div className='AllGames' style={{ "overflow-x": "auto" }}>
                <table>
                    <tr>
                        <th>Character Name</th>
                        <th>Character Game Name</th>
                        <th>Character Image Url</th>
                        <th>Options</th>
                    </tr>
                    {characters.map((game) => {
                        return (
                            <GameCharacter
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                game={game.game}
                                image={game.image}
                                onEditCharacter={onEditCharacter}
                                onDeleteCharacter={onDeleteCharacter}
                            />
                        );
                    })}

                </table>
            </div>
        </>
    )
}

export default CreateCharacter