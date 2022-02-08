// @vendors
import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import Lottie from 'react-lottie';

// @animations
import animationData from '../assets/lotties/lf20_gn25stii.json';

// @api
import {CHARACTERS_QUERY} from '../api';

// @components
import CharacterCard from '../components/characterCard';
import ModalCharacterDetail from '../components/characterDetailModal';

// @constants
import { START_WARS_IMAGE } from '../constants';
import { Typography } from '@mui/material';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const HomePage = () => {
  const { error, data, loading } = useQuery(CHARACTERS_QUERY);
  const [openCharacterDetail, setOpenCharacterDetail] = useState(false);
  const [characterDetail, setCharacterDetail] = useState(null);
  const router = useRouter()

  const handleOpenCharacterDetail = (id) => {
    router.push(`/?id=${id}`, undefined, { shallow: true })
  }

  const handleCloseCharacterDetail = () => {
    setOpenCharacterDetail(false);
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

  const renderContent = () => {
    let content;

    if (loading) {
      content = (
        <Lottie 
          options={defaultOptions}
            height={300}
            width={400}
          />
      );
    }

    if (data) {
      content = (
        <ul style={ulStyles}>
          {
            data?.allPeople.people.map((character) => 
              <CharacterCard
                character={character}
                onClick={handleOpenCharacterDetail}
              />
            )
          }
        </ul>
      )
    }

    if (error) {
      content = (
        <Typography color="error">
          Error loading information, try later
        </Typography>
      )
    }

    return content;
  }

  const mainStyles = {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      background: 'black'
    }

  const ulStyles = {
    position: 'relative',
    textAlign: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  }

  const headerImageStyles = {
    width: 400,
    height: 400,
  }

  return (
    <div style={mainStyles}>
      <img style={headerImageStyles} src={START_WARS_IMAGE} />
      {renderContent()}
      <ModalCharacterDetail
        characterDetail={characterDetail}
        show={openCharacterDetail}
        handleClose={handleCloseCharacterDetail}
      />
    </div>
  );
};

export default HomePage;
