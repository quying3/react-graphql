import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);
  console.log(error, loading, data);
  if (error || (!loading && !data.character))
    return <div>something went wrong</div>;
  if (loading) return <div>spinner</div>;
  return (
    <div>
      <h1>Character</h1>
      <div className="Character">
        <img
          src={data.character.image}
          alt={data.character.name}
          width={750}
          height={750}
        />
        <div className="Character-content">
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div className="Character-episode">
            {data.character.episode.map((episode) => {
              return (
                <div key={episode.id}>
                  {episode.name} - <b>{episode.episode}</b>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
