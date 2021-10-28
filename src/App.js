import './App.css';
import { useState } from 'react';

import Display  from './components/Display';
import Login    from './components/Login';

function App() {

    const [user, setUser] = useState(null);

    return (

        <div className="App">

            {/* Step 1: Sign in. */}
            
            {user ? <Display user = {user} /> : <Login setUser = {setUser} />}

        </div>
    );
}

export default App;
