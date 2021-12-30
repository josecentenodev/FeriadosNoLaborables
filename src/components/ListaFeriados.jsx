import React, { useState, useEffect } from "react";
import CircularIndeterminate from "./CirularIndeterminate";
import getFeriados from "../services";
import Feriado from "./Feriado";




function ListaFeriados() {

    const [isLoading, setIsLoading] = useState(true);
    const [feriados, setFeriados] = useState([]);

    useEffect(()=>{
        async function loadFeriados() {
            const response = await getFeriados()
            if (response.status === 200) {
                setFeriados(response.data)
                setIsLoading(false)
            }
        }

        loadFeriados()
    }, [])

    return (
        isLoading ? 
        <CircularIndeterminate /> : 
        <Feriado feriados={feriados}/>
    )

}

export default ListaFeriados;