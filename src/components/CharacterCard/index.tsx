import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HeightIcon from '@mui/icons-material/Height';

// @theme
import {COLORS} from '../../theme'

interface ICharacter {
    name: string,
    id: string,
};

interface ICharacterProps {
    character: ICharacter,
    onClick: (id: string) => void,
};

const CharacterCard: React.FC<ICharacterProps> = ({character, onClick}) => {

    return (
        <li key={character.id}>
            <Button style={{color: COLORS.primary}} onClick={() => onClick(character.id)}>
                <Typography variant="h4">
                    {character.name}
                </Typography>
            </Button>
        </li>
    )
}

export default CharacterCard;
