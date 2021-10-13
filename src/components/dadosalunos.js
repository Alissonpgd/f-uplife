
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from '../services/api';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


function DadosAluno() {


    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [plano, setPlano] = useState('');
    const [valor, setValor] = useState('');
    const [formapagamento, setFormapagamento] = useState('');
    const [datacadastro, setDatacadastro] = useState(null);

    const { _id } = useParams();

    useEffect(() => {
        async function getDados() {
            var response = await api.get('usuarios/' + _id);

            setNome(response.data.nome);
            setWhatsapp(response.data.whatsapp);
            setEndereco(response.data.endereco);
            setNumero(response.data.numero);
            setBairro(response.data.bairro);
            setCpf(response.data.cpf);
            setEmail(response.data.email);
            setPlano(response.data.plano);
            setValor(response.data.valor);
            setFormapagamento(response.data.formapagamento);
            setDatacadastro(response.data.datacadastro);
        }
        getDados();

    }, []);



    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Nome"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </Grid>
                <Grid item xs={10} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Whatsapp"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Endereço"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                    />
                </Grid>
                <Grid item xs={10} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Número"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                    />
                </Grid>


                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Bairro"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="CPF"
                        fullWidth
                        variant="standard"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="E-mail"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Grid>
            </Grid>
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Plano</FormLabel>
                <RadioGroup
                    row aria-label="diario"
                    name="row-radio-buttons-group"
                    value={plano}
                    onChange={e => setPlano(e.target.value)}>

                    <FormControlLabel value="diario" control={<Radio />} label="Diario" />
                    <FormControlLabel value="mensal" control={<Radio />} label="Mensal" />
                    <FormControlLabel value="trimenstral" control={<Radio />} label="Trimestral" />
                    <FormControlLabel value="semestral" control={<Radio />} label="Semestral" />
                    <FormControlLabel value="anual" control={<Radio />} label="Anual" />
                    <FormControlLabel value="familiar" control={<Radio />} label="Familiar" />
                </RadioGroup>
            </FormControl>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-basic"
                    label="Valor"
                    type="float"
                    variant="standard"
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                />
            </Box>
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Forma de Pagamento</FormLabel>
                <RadioGroup
                    row aria-label="credito"
                    name="row-radio-buttons-group"
                    value={formapagamento}
                    onChange={e => setFormapagamento(e.target.value)}
                >
                    <FormControlLabel value="credito" control={<Radio />} label="Crédito" />
                    <FormControlLabel value="debito" control={<Radio />} label="Débito" />
                    <FormControlLabel value="boleto" control={<Radio />} label="Boleto" />
                    <FormControlLabel value="pix" control={<Radio />} label="PIX" />
                    <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="Cheque"
                    />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormLabel component="legend">Data do Cadastro</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Data"
                    type="data"
                    value={datacadastro}
                    onChange={e => setDatacadastro(e)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <br />
            <br />
            <Stack direction="row" spacing={50}>

                <Button variant="contained" endIcon={<ArrowLeftIcon />} href="/listar" >
                    Voltar
                </Button>
            </Stack>
            <br />
            <br />



        </div >
    )
}

export default DadosAluno;