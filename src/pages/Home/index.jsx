import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar';
import PokeCard from '../../components/cards';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import axios from "axios";
// import getPokemons from '../services/axios.js';

export const Home = () => {
    
    // State para colocar os dados dos pokémon nos cards
    const [pokemons, setPokemons] = useState([]);

    // Fazendo a requisição get da API
    useEffect (() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = []
        for (var i = 1; i < 151; i++) {
            // eslint-disable-next-line 
            endpoints.push('https://pokeapi.co/api/v2/pokemon/' + i);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const pokeFilter = (name) => {
        var filterdPokemons = [];
        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if ((pokemons[i].data.name.includes(name))) {
                filterdPokemons.push(pokemons[i]);
            } 
        }
        setPokemons(filterdPokemons);
    }

    return (
        <>
            <NavBar pokeFilter={pokeFilter}/>
            <Container maxWidth={"false"}>
                <Grid container display={"flex"} flexDirection="row" flexWrap="wrap" cursor={"pointer"}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                            <PokeCard order={pokemon.data.id} name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}