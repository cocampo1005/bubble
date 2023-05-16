import './HomePage.scss';
import HomeLandingState from '../../components/HomeLandingState/HomeLandingState';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import HomeBrowseState from '../../components/HomeBrowseState/HomeBrowseState';

function HomePage() {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className={`home${!currentUser ? '-landing' : '-browse'}`}>

            {!currentUser ? <HomeLandingState /> : <HomeBrowseState />}

        </div>
    )
}

export default HomePage;