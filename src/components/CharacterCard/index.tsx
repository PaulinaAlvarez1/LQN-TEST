import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HeightIcon from '@mui/icons-material/Height';

const CharacterCard = ({character}) => {

    return (
        <Card sx={{ minWidth: 275 }} >
            <CardContent>
            <Typography variant="body2">
                {character.name}
            </Typography>
            <Typography variant="body2">
               <HeightIcon /> {character.height}
            </Typography>
            <Typography variant="body2">
               <FitnessCenterIcon /> {character.mass}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">See more</Button>
            </CardActions>
        </Card>
    )
}

export default CharacterCard;
