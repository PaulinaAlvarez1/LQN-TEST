import { gql } from '@apollo/client';

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
