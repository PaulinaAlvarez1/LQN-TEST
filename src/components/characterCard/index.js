import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CharacterCard = ({character, onClick}) => {

    return (
        <li key={character.id}>
            <Button color="primary" onClick={() => onClick(character.id)}>
                <Typography variant="h4">
                    {character.name}
                </Typography>
            </Button>
        </li>
    )
}

export default CharacterCard;
