import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';

import Header from './components/header/Header.jsx';

export default function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/user/:id" element={<Home />} />                   
                </Routes>
            </Router>
        </div>
    );
}
