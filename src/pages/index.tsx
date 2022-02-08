// @vendors
import React, {useState, useEffect} from 'react'
import type { NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import CSS from 'csstype';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRouter } from 'next/router'

// @components
import CharacterCard from '../components/CharacterCard';

// @theme
import { COLORS } from '../theme';

// @constants
import { START_WARS_IMAGE } from '../constants';

export const CHARACTERS_QUERY = gql`
  query {
    allPeople {
      people {
        id,
        gender,
        name,
        filmConnection {
          films {
            id,
            title,
            director,
            planetConnection {
              planets {
                name,
                population
              }
            }
          }
        }
      }
    }
  }
`

const HomePage: NextPage = () => {
  const { error, data, loading } = useQuery(CHARACTERS_QUERY);
  const [openCharacterDetail, setOpenCharacterDetail] = useState<boolean>(false);
  const [characterDetail, setCharacterDetail] = useState<any>(null);
  const router = useRouter()

  const handleOpenCharacterDetail = (id: string) => {
    router.push(`/?id=${id}`, undefined, { shallow: true })
  }

  useEffect(() => {
    if (router.query.id) {
      const detailCharacter = data?.allPeople.people.find(person => person.id === router.query.id);
      if (detailCharacter) {
        setCharacterDetail(detailCharacter);
        setOpenCharacterDetail(true);
      }
    }
  }, [router.query.id, data])


  const handleCloseCharacterDetail = () => setOpenCharacterDetail(false);
  const mainStyles: CSS.Properties = {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      background: 'black'
    }

  const ulStyles: CSS.Properties = {
    position: 'relative',
    textAlign: 'center',
    listStyleType: 'none',
    // transformOrigin: '50% 100%',
    // transform: 'rotateX(46deg) translateZ(-100px)',
    margin: 0,
    padding: 0,
  }

  const modalContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(0, 0, 0, 0.8)',
    border: `1px solid ${COLORS.primary}`,
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={mainStyles}>
      <img style={{width: 400, height: 400}} src={START_WARS_IMAGE} />
      {loading && <CircularProgress style={{color: 'white'}} />}
      <ul style={ulStyles}>
        {data?.allPeople.people.map((character: any) => <CharacterCard character={character} onClick={handleOpenCharacterDetail} />)}
      </ul>
      {error && <p>Error loading information, try later</p>}
      <Modal
        open={openCharacterDetail}
        onClose={handleCloseCharacterDetail}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalContainerStyle}>
          <Typography variant="h6" component="h2" color={COLORS.primary} style={{alignSelf: 'center'}}>
            {characterDetail?.name} 
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }} color={COLORS.primary}>
            Films {characterDetail?.filmConnection.films.map(film => <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} color={COLORS.primary}>
                {film.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} color={COLORS.primary}>
                Directed by: {film.director}
              </Typography>
              {film.planetConnection.planets.map(planet => <Typography id="modal-modal-description" sx={{ mt: 2 }} color={COLORS.primary}>{planet.name}</Typography>)}
            </>)}
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
};

export default HomePage;
