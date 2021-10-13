import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/client/painel';
import Menu from './pages/dashboard/index';
import CadastrarAlunos from './pages/alunos/cadastrar.js';
import AlunosAtualizar from './pages/alunos/atualizar.js';
import AlunosListagem from './pages/alunos/listar.js';
import AlunosDados from './pages/alunos/aluno.js';

import Treino from './pages/treino/treino';


export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/cadastrar" exact component={CadastrarAlunos} />
                <Route path="/atualizar" exact component={AlunosAtualizar} />
                <Route path="/listar" exact component={AlunosListagem} />
                <Route path="/aluno/:_id" exact component={AlunosDados} />
                <Route path="/treino" exact component={Treino} />
            </Switch>
        </BrowserRouter>
    )
}


