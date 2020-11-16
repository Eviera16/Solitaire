import React, {useContext} from 'react';
import '../App.css';
import { Link } from '@reach/router';
import UserContext from '../contexts/userContext';

const Home = props => {

    const { currentUser, setCurrentUser} = useContext(UserContext);

    const logout = (e) => {
        e.preventDefault();
        setCurrentUser(null)
    }

    return (
        <div class="homeBackground">
            <h1 class="homeTitle">Lavataire</h1>

            <Link to="/play" class="clickPlay">Click to Play</Link>
            <Link to="/howToPlay" class="clickPlay">How to Play</Link>
            <div class="logRegHome">
                {
                    currentUser == null ?  
                    <div>
                        <h2>Play as a guest or sign in/ sign up here!<Link to="/logReg" class="logReg"> Login/Registar</Link></h2>
                    </div>
                    : 
                    <div class="welcome">
                        <h3>Welcome {currentUser.name}</h3>
                        <button onClick={logout}>Logout</button>
                    </div>
                }

            </div>

        </div>
    );
}

export default Home;