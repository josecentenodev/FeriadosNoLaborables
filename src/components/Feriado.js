import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Feriado = ({feriados}) => {
    return (
        <Container fixed className="mt25">
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    feriados.map((feriado, index)=>(
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <Box sx={{ width: '100%'}} className='feriados__box'>
                                <Item className='feriados__box'>
                                    <div  className='feriado'>
                                        <p className='feriado__dia'>
                                            {feriado.dia} del {feriado.mes}
                                        </p>
                                        <div className='feriado__descripcion'>
                                            <p className='feriado__descripcion-item'>
                                                <span>{feriado.motivo}</span>
                                            </p>
                                            <p className='feriado__descripcion-item'>
                                                {feriado.tipo}
                                            </p>
                                            <Button href={feriado.info} variant="contained">wiki</Button>
                                        </div>
                                    </div>
                                </Item>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            </Container>
    )
}

export default Feriado;

