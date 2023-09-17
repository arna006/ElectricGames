import React, { useEffect, useState } from 'react'
import Navbar from '../components/Frontend/Navbar'

import GameCreate from '../components/Admin/GameCreate'
import Game from '../components/Admin/Game';

const CreateGame = () => {
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
  const onAddGame = async (title, plateform, releaseYear, image) => {
    await fetch("https://localhost:7247/api/Games", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        plateform: plateform,
        releaseYear: releaseYear,
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
        setGames((games) => [...games, data]);
      })
      .catch((error) => console.log(error));
  };
  const onDeleteGame = async (id) => {
    await fetch(`https://localhost:7247/api/games/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setGames(
            games.filter((game) => {
              return game.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };
  const onEditGame = async (id, title, plateform, releaseYear, image) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        plateform: plateform,
        releaseYear: releaseYear,
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
        const updatedGames = games.map((game) => {
          if (game.id === id) {
            game.title = title;
            game.releaseYear = releaseYear;
            game.image = image;
            game.plateform = plateform;
          }
          return game;
        });
        setGames((games) => updatedGames);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <GameCreate onAddGame={onAddGame} />

      <div className='AllGames' style={{ "overflow-x": "auto" }}>
        <table>
          <tr>
            <th>Game Title</th>
            <th>Game Release Year</th>
            <th>Game Platform</th>
            <th>Game Image Url</th>
            <th>Options</th>
          </tr>
          {games.map((game) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                title={game.title}
                plateform={game.plateform}
                releaseYear={game.releaseYear}
                image={game.image}
                onEditGame={onEditGame}
                onDeleteGame={onDeleteGame}
              />
            );
          })}

        </table>
      </div>

    </>
  )
}

export default CreateGame