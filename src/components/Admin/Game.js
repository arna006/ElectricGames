import React, { useState } from "react";

const Game = ({ title, plateform, releaseYear, image, id, onEditGame, onDeleteGame }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDeleteGame(id);
  };

  const handleOnEditSubmit = (evnt) => {
    evnt.preventDefault();
    onEditGame(
      id, 
      evnt.target.title.value,
      evnt.target.plateform.value,
      evnt.target.releaseYear.value,
      evnt.target.image.value
    );
    setIsEdit(!isEdit);
  };

  return (
    <>
              {isEdit ? (
                    <tr>
                        <td><input placeholder="Title" name="title" defaultValue={title} /></td>
                        <td><input placeholder="Plateform" name="plateform" defaultValue={plateform} /></td>
                        <td><input placeholder="Release Year" name="releaseYear" defaultValue={releaseYear} /></td>
                        <td><input placeholder="Image Url" name="image" defaultValue={image} /></td>
                        <td>
                          <button onSubmit={handleOnEditSubmit}>Save</button>
                          <button onClick={handleEdit}>Cancel</button>
                        </td>

                    </tr>
              ) : (
                <tr>    
                    <td>{title}</td>
                    <td>{releaseYear}</td>
                    <td>{plateform}</td>
                    <td>{image}</td>
                    <td>
                        <button onClick={handleEdit}>Update</button>
                        <button onClick={handleDelete}>Delete</button>
                    </td>
                </tr>
              )}
              
      
    </>
  );
};

export default Game