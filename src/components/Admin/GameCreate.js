import React from 'react'

const GameCreate = ({ onAddGame }) => {
    const handleOnGameSubmition = (evnt) => {
        evnt.preventDefault();
        onAddGame(
            evnt.target.title.value,
            evnt.target.plateform.value,
            evnt.target.releaseYear.value,
            evnt.target.image.value
        );
        evnt.target.title.value = "";
        evnt.target.plateform.value = "";
        evnt.target.releaseYear.value = "";
        evnt.target.image.value = "";
    };
    return (
        <>
            <div className="CreateGamecontainer">
                <form onSubmit={handleOnGameSubmition}>
                    <div className="row">
                        <div className="col-25">
                            <label for="title">Game Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="title" name="title" placeholder="Enter Game Title" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="releaseYear">Game Release Year</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="releaseYear" name="releaseYear" placeholder="Enter Game Release Year" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="plateform">Game Platform</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="plateform" name="plateform" placeholder="Enter Game Platform" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="image">Game Image Release Year</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="image" name="image" placeholder="Enter Game Image Url" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"></div>
                        <div className="col-75">
                            <button onSubmit={handleOnGameSubmition}>Add New Game</button></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GameCreate