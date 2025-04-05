import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="post-card">
      <img src={character.image} alt="Character" className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{character.name}</h2>
        <p className="post-excerpt">{character.description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;

