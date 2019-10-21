/**
 * @flow
 */
import React from 'react';

class About extends React.Component<{}> {
    render() {
        console.log('props', this.props)
        return (
            <div>About</div>
        );
    }
}

export default About;