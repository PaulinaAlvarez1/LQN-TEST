// @vendors
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PublicIcon from '@mui/icons-material/Public';

// @theme
import { COLORS } from '../../theme';

const CharacterDetailModal = ({show, characterDetail, handleClose}) => {
    const modalContainerStyle = {
        position: 'absolute',
        maxHeight: '100vh',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'rgba(0, 0, 0)',
        border: `1px solid ${COLORS.primary}`,
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
      };

      const titleStyle = {
        alignSelf: 'center'
      }

    const filmsStyle = {
        marginBottom: 10,
        border: '2px solid lightgray',
        padding: 6,
    };

    const flex = {
        display: 'flex',
    };

    const planetContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
    };

    const planetStyle = {
        marginLeft: 8,
    };

    const filmTitle = {
        marginTop: 20,
        marginBottom: 20
    }
    
    return (
        <Modal
            open={show}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
        >
            <Box sx={modalContainerStyle}>
                <Typography variant='h3' color="primary" style={titleStyle}>
                    {characterDetail?.name} 
                </Typography>
                <Box>
                    <Typography style={filmTitle} color="lightgray" variant="h4">Films</Typography>
                    {
                        characterDetail?.filmConnection?.films.map(film => 
                            <Box style={filmsStyle}>
                                <Box>
                                    <Typography color="secondary">Title: </Typography>
                                    <Typography color="primary" style={flex}>
                                        {film.title}
                                    </Typography>
                                    <Typography color="secondary">Directed by: </Typography>
                                    <Typography color="primary" style={flex}>
                                        {film.director}
                                    </Typography>
                                </Box>
                                <Box style={planetContainerStyle}>
                                    <PublicIcon color="secondary" />
                                    {
                                        film.planetConnection.planets.map(planet => 
                                            <Typography color="lightgray" style={planetStyle}>
                                                {planet.name}
                                            </Typography>
                                        )
                                    }
                                </Box>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </Modal>
    )
}

export default CharacterDetailModal;
