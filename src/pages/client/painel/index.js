import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BackGround from '../../../assets/img/UpLife_1.png';
import ARDesevolvimento from '../../../assets/img/ARDesenvolvimento.png';
//import api from '../../../services/api';



function Copyright(props) {
  return (
    <Typography sx={{ alignItems: 'center' }} variant="body2" color="text.secondary" align="center" {...props}>
      <img src={ARDesevolvimento} alt="ardev" srcset="" width={30} />
      <p>AR Desenvolvimentos</p>
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();


  function handleClick() {

    if (usuario !== "Glaubiano21") {
      alert("Usuario Invalido!");
    } else if (senha !== "UpLife_2021") {
      alert("SENHA Invalida!")
    } else {
      alert("Seja Bem Vindo!")
      window.location.href = "menu";
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} >
          <img src={BackGround} alt="imagem" width={100} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ bgcolor: '#ffcc9' }} >
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
            <Avatar sx={{ m: 1, bgcolor: '#c0d731' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Entre
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome"
                type="nome"
                name="nome"
                autoComplete="nome"
                autoFocus
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="senha"
                autoComplete="current-password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
              <Button

                onClick={handleClick}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button >

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}