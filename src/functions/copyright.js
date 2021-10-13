import React from 'react;'
import Typography from '@mui/material/Typography';
import ARDesevolvimento from '../../../assets/img/ARDesenvolvimento.png';
import { CopyrightTwoTone } from '@mui/icons-material';


function Copyright(props) {
    return (
        <Typography sx={{ alignItems: 'center' }} variant="body2" color="text.secondary" align="center" {...props}>
            <img src={ARDesevolvimento} alt="ardev" srcset="" width={30} />
            <p>AR Desenvolvimentos</p>
        </Typography>
    );
}

export default Copyright;