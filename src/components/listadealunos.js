import React, { useState, useEffect } from 'react';
import { useHistory, } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import DeleteIcon from '@mui/icons-material/Delete';
import LoginIcon from '@mui/icons-material/Login';

import api from '../services/api';

export default function ListadeAlunos() {

    const history = useHistory();

    const [alunos, setAlunos] = useState([]);
    //Função Cadastrar
    useEffect(() => {

        async function loadAlunos() {
            const response = await api.get("usuarios");

            setAlunos(response.data);
        }
        loadAlunos();
    }, []);

    //Função Deletar
    async function handleDelete(_id) {
        if (window.confirm("DESEJA EXCLUIR O ALUNO?")) {
            var result = await api.delete('usuarios/' + _id);
            if (result.status === 200) {
                history.push('/listar');
            }
        }
    }



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>

                        <TableCell>Nome</TableCell>
                        <TableCell align="center">Valor</TableCell>
                        <TableCell align="center">Data de Cadastro</TableCell>
                        <TableCell align="center">Forma de Pagamento</TableCell>
                        <TableCell align="center">Entrar</TableCell>
                        <TableCell align="center">Atualizar</TableCell>
                        <TableCell align="center">Excluir</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {alunos.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell component="th" scope="row">{row.nome}</TableCell>
                            <TableCell align="center">{row.valor}</TableCell>
                            <TableCell align="center">{row.datacadastro}</TableCell>
                            <TableCell align="center">{row.formapagamento}</TableCell>
                            <TableCell align="center">
                                <IconButton href={"aluno/" + (row._id)} aria-label="show">
                                    <LoginIcon />

                                </IconButton>
                            </TableCell>
                            <TableCell align="center">
                                <IconButton href={'atualizar/' + (row._id)} aria-label="Atualizar">
                                    <ArrowCircleUpIcon
                                    />
                                </IconButton>
                            </TableCell>
                            <TableCell align="center">
                                <IconButton onClick={() => { handleDelete(row._id) }} href={'/listar'} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}


                </TableBody>
            </Table>
        </TableContainer>
    );
}