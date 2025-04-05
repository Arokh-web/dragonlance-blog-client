import React, { useContext } from "react";
import { CharacterDataContext } from "../App";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const { characters } = useContext(CharacterDataContext);

  return (
    <div className="page-container">
      <h1 className="page-title"></h1>
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
};

export default Characters;
