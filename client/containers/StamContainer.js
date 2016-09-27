import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import styles from './stam.scss';

const compClassName = 'stam';

var StamContainer = React.createClass({
    render() {
        return (
            <div className={compClassName}>
                Stam container
                <br />
                <Link to="/">link to index</Link>
            </div>
        );
    }

});

function mapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StamContainer);