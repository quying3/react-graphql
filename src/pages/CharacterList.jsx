import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data });

  if (loading) return <div>spinner...</div>;
  if (error) return <div>something went wrong</div>;

  return (
    <div>
      <h1>CharacterList</h1>
      <div className="CharacterList">
        {data.characters.results.map((character) => {
          return (
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
