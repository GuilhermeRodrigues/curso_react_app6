import React, { Component } from 'react';

import {
    AppRegistry
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class app6 extends Component {
    render() {
        return (
            <Router>
                <Scene key='principal' component={Principal} initil title="Cara ou coroa" />
                <Scene key='sobreJogo' component={SobreJogo} />
                <Scene key='outrosJogos' component={OutrosJogos} />
            </Router>

        );
    }
}

AppRegistry.registerComponent('app6', () => app6);
