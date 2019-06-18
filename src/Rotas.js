import React from 'react';

import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='principal' component={Principal} initil title="Cara ou coroa" />
        <Scene key='sobreJogo' component={SobreJogo} initil title="Sobre o jogo" />
        <Scene key='outrosJogos' component={OutrosJogos} initil title="Outros jogos" />
        <Scene key='resultado' component={Resultado} initil title="Resultado" />
    </Router>
);

export default Rotas;
