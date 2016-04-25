import React from 'react';

require('./example.scss');

const compClassName = 'example';
const Example = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired
    },


    render() {

        const { name } = this.props;

        return (
            <div className={compClassName}>
                the name in our example is {name}
            </div>
        );
    }

});

export default Example;
