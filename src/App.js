
import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

   

const App = () => {
    const [view, setView] = useState("login");

    return (
        <div className="container">
            {view === "login" ? <Login setView={setView} /> : <Signup setView={setView} />}
        </div>
    );
};

export default App;