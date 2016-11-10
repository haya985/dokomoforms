import React from 'react';
import NodeList from './Node.babel.js';

// DEFINITION:
// a SUBSURVEY should receive from parent component:
// 1) the question
// 2) the answers that lead to subsurvey
// 3) a callback function to receive subsurvey
// a SUBSURVEY should return:
// 1) a subsurvey object with nodes and buckets

// to do:
// sub-survey should probably display the question and answer(s) that
// leads to it
// should user choose bucket on this page or node page?

class SubSurvey extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buckets: [],
            nodes: []
        };
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}

export default SubSurvey;