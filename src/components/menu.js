import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import MenuOpen from '@mui/icons-material/MenuOpen';
import PersonAddAlt1 from '@mui/icons-material/PersonAddAlt1';
import EmojiPeople from '@mui/icons-material/EmojiPeople';
import FormatListNumbered from '@mui/icons-material/FormatListNumbered';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import AttachMoney from '@mui/icons-material/AttachMoney';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import Construction from '@mui/icons-material/Construction';
import ExitToApp from '@mui/icons-material/ExitToApp';


export const mainListItems = (
    <div>
        <ListItem button component="a" href="/menu">
            <ListItemIcon>
                <MenuOpen />
            </ListItemIcon>
            <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component="a" href="/cadastrar">
            <ListItemIcon>
                <PersonAddAlt1 />
            </ListItemIcon>
            <ListItemText primary="Cadastro" />
        </ListItem>
        <ListItem button component="a" href="/listar">
            <ListItemIcon>
                <FormatListNumbered />
            </ListItemIcon>
            <ListItemText primary="Lista de Alunos" />
        </ListItem>
        <ListItem button component="a" href="aluno ">
            <ListItemIcon>
                <EmojiPeople />
            </ListItemIcon>
            <ListItemText primary="Aluno" />
        </ListItem>

        <ListItem button component="a" href="treino">
            <ListItemIcon>
                <FitnessCenter />
            </ListItemIcon>
            <ListItemText primary="Treinos" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Base de Dados</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AttachMoney />
            </ListItemIcon>
            <ListItemText primary="Mês Corrente" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MonetizationOn />
            </ListItemIcon>
            <ListItemText primary="Ano Corrente" />
        </ListItem>

        <ListSubheader inset>Options</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <Construction />
            </ListItemIcon>
            <ListItemText primary="Configuração" />
        </ListItem>
        <ListItem button component="a" href="/">
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sair" />
        </ListItem>
    </div>
);