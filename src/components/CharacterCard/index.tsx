import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// @types
import { ICharacter } from '../../types';

interface ICharacterProps {
    character: ICharacter,
    onClick: (id: string) => void,
};

const CharacterCard: React.FC<ICharacterProps> = ({character, onClick}) => {

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
