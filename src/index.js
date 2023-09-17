import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllGames from './components/Admin/Game';
import CreateCharacter from './Pages/createCharacter';
import CreateGame from './Pages/CreateGame';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route index element={<Home />} /> */}
            <Route path="create-games" element={<CreateGame />} />
            <Route path="create-character" element={<CreateCharacter />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
);