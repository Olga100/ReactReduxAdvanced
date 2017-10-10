import React from 'react';
import MainHeader from './MainHeader';

class Home extends React.Component {

    render() {

        return (

            <div>

                <MainHeader/>

                <div className="home">
                    <h3>Congratulations!</h3>
                    You are on the home page.
                </div>

            </div>
        )
    }
}

export default Home;