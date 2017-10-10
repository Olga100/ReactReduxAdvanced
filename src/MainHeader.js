import React from 'react';
import {Link} from 'react-router';

class MainHeader extends React.Component {

    render() {

        return (
            <div className="mainHeader">

                <span className="nav"> <Link className="navLink" to="/home" activeClassName="active">Home</Link></span>
                <span className="nav"><Link className="navLink" to="/movies"
                                            activeClassName="active"> Movies</Link></span>
                <span className="nav"><Link className="navLink" to="/about" activeClassName="active">About</Link></span>
            </div>);
    }
}

export default MainHeader;

