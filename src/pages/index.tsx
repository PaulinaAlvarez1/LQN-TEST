import React, {useEffect, useState} from 'react'
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useApolloClient, gql, useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import CSS from 'csstype';


// @components
import CharacterCard from '../components/CharacterCard';
import { flexbox } from '@mui/system';

export const PRODUCTS_QUERY = gql`
  query {
    allPeople {
      people {
        name
      }
    }
  }
`

const IndexPage: NextPage = () => {
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(false);
  const apolloClient = useApolloClient();
  const { error, data } = useQuery(PRODUCTS_QUERY);
  
  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/people/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
    .then((res) => {
      setLoading(false);
      setPeople(res.results);
    })
  })
  
  const styles: CSS.Properties = {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      background: 'black'
    }

  console.log(loading, data, 'graphql')
  return (
    <div style={styles}>
      <img style={{width: 400, height: 400}} src="https://yt3.ggpht.com/ytc/AKedOLSe-xFPeYa1w2FH8cnY_cludN8Hg0LbIz8iqhhJww=s900-c-k-c0x00ffffff-no-rj" />
      {loading && <CircularProgress style={{color: 'white'}} />}
      {people && people.map(character => <CharacterCard character={character} />)}
    </div>
  );
};

export default IndexPage;
