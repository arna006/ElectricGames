import React from 'react'

const GameCharacterCreate = ({ onAddGame }) => {
    const handleOnCharacterSubmission = (evnt) => {
        evnt.preventDefault();
        onAddGame(
            evnt.target.name.value,
            evnt.target.game.value,
            evnt.target.image.value
        );
        evnt.target.name.value = "";
        evnt.target.game.value = "";
        evnt.target.image.value = "";
    };
    return (
        <>
            <div className="CreateGamecontainer">
                <form onSubmit={handleOnCharacterSubmission}>
                    <div className="row">
                        <div className="col-25">
                            <label for="name">Game Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="name" name="name" placeholder="Enter Game Title" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="game">Name of Game</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="game" name="game" placeholder="Enter Game Name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="image">Game Image </label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="image" name="image" placeholder="Enter Game Image Url" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"></div>
                        <div className="col-75">
                            <button onSubmit={handleOnCharacterSubmission}>Add New Game</button></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GameCharacterCreate
