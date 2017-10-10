import React from 'react';
import PropTypes from 'prop-types';

class Stars extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stars: this.props.stars
        }
    }

    setStars(stars) {
        if (this.props.onChange) {
            this.setState({stars: stars});
            this.props.onChange(stars);
        }
    }

    renderStar(filled, value) {
        const character = filled ? String.fromCharCode(0x2605) : String.fromCharCode(0x2606);

        return (<span key={value} onClick={() => this.setStars(value)}>{character}</span>);
    }

    render() {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(this.renderStar(i <= this.state.stars, i));
        }

        return <span style={{cursor: "default"}}>{stars}</span>;
    }
}

Stars.propTypes = {
    stars: PropTypes.number.isRequired,
    onChange: PropTypes.func
};

export default Stars;