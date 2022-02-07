import React, {useEffect, useState} from 'react'
import type { NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import CSS from 'csstype';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


// @components
import CharacterCard from '../components/CharacterCard';

export const CHARACTERS_QUERY = gql`
  query {
    allPeople {
      people {
        name,
        id
      }
    }
  }
`

const HomePage: NextPage = () => {
  const { error, data, loading } = useQuery(CHARACTERS_QUERY);
  const [openCharacterDetail, setOpenCharacterDetail] = useState<boolean>(false);
  const handleOpenCharacterDetail = () => setOpenCharacterDetail(true);
  const handleCloseCharacterDetail = () => setOpenCharacterDetail(false);

  const styles: CSS.Properties = {
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
    transformOrigin: '50% 100%',
    transform: 'rotateX(46deg) translateZ(-100px)',
    margin: 0,
    padding: 0,
  }

  console.log(loading, data, 'graphql')
  return (
    <div style={styles}>
      <img style={{width: 400, height: 400}} src="https://yt3.ggpht.com/ytc/AKedOLSe-xFPeYa1w2FH8cnY_cludN8Hg0LbIz8iqhhJww=s900-c-k-c0x00ffffff-no-rj" />
      {loading && <CircularProgress style={{color: 'white'}} />}
      <ul style={ulStyles}>
        {data?.allPeople.people.map((character: any) => <CharacterCard character={character} onClick={handleCloseCharacterDetail}/>)}
      </ul>
      {error && <p>Error loading information, try later</p>}
      <Modal
        open={openCharacterDetail}
        onClose={handleCloseCharacterDetail}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ulStyles}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default HomePage;
