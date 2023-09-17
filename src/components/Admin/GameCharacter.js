import React, { useState } from 'react'

const GameCharacter = ({ name, game, image, id, onEditCharacter, onDeleteCharacter }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDeleteCharacter(id);
  };

  const handleOnEditSubmit = (evnt) => {
    evnt.preventDefault();
    onEditCharacter(
      id,
      evnt.target.name.value,
      evnt.target.game.value,
      evnt.target.releaseYear.value,
      evnt.target.image.value
    );
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (
        <tr>
          <td><input placeholder="Name" name="name" defaultValue={name} /></td>
          <td><input placeholder="Plateform" name="game" defaultValue={game} /></td>
          <td><input placeholder="Image Url" name="image" defaultValue={image} /></td>
          <td>
            <button onSubmit={handleOnEditSubmit}>Save</button>
            <button onClick={handleEdit}>Cancel</button>
          </td>

        </tr>
      ) : (
        <tr>
          <td>{name}</td>
          <td>{game}</td>
          <td>{image}</td>
          <td>
            <button onClick={handleEdit}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </tr>
      )}


    </>
  );
}

export default GameCharacter