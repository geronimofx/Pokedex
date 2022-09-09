import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PokeCard({ id, name, image, types }) {

    const typeOfPokemon = () => {
        if (types[1]) {
            return types[0].type.name + " & " + types[1].type.name;
        } else {
            return types[0].type.name;
        }
    }

    return (
        <Card sx={{ maxWidth: 345, margin: "1rem"}}>
            <CardActionArea>
                {id}
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt="sprites dos 151 primeiros pokémons"
                />
                <CardContent sx={{textAligns: 'center'}}>
                    <Typography gutterBottom variant="h5" component="div" align="center" justifyItems={"space-between"} color="#3333333" fontSize={"1.5rem"}>
                        {name}
                    </Typography>
                    <Typography variant="h6" color="#3333333" align="center" fontSize={"1rem"}>
                        {typeOfPokemon()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
