
import React, { Component } from 'react';
import { Link } from '@mui/material';
import { strings } from '../config/app.config';

export default class NoMatch extends Component {
    render() {
        return (
            <div className='msg'>
                <h2>{strings.NO_MATCH}</h2>
                <p><Link href='/'>{strings.GO_TO_HOME}</Link></p>
            </div>
        );
    }
}