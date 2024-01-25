import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLoactions, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name: name },
    }
  );
  console.log({ called, loading, error, data });
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLoactions()}>Search</button>
      {loading && <div>spinner...</div>}
      {error && <div>something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character, index) => {
            // console.log(character.location);
            return <li key={index}>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
