import React from "react";
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>spinner...</div>;
  if (error) return <div>something went wrong</div>;

  return (
    <div>
      <h1>CharacterList</h1>
      <div className="CharacterList">
        {data.characters.results.map((character) => {
          return (
            <Link to={character.id} key={character.id}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
