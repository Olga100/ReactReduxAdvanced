import React from 'react';
import InputSearch from './InputSearch';

class FilterSort  extends React.Component {

    render() {
        return (

            <div className="FieldSortSearch">

                <p>Sort movies</p>

                <div>

                    <button type="button" className="sortByLikies" onClick={this.props.sortByLikes}>
                        <small> by likies</small>
                    </button>

                    <button type="button" className="sortByRating" onClick={this.props.sortByRating }>
                        <small> by rating</small>
                    </button>

                </div>

                <InputSearch onFilter={this.props.filter}/>
            </div>
        )
    }
}

export default FilterSort;