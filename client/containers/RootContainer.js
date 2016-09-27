import React from 'react';
import styles from './root.scss';

var RootContainer = React.createClass({

    render() {
        return (
            <main className="root-container">
                {this.props.children}
            </main>
        );
    }

});

export default RootContainer;
