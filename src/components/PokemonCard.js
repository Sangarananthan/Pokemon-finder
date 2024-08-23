import React from "react";

const PokemonCard = ({ pokemonName, pokemonUrl }) => {
  return (
    <div
      className="card"
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={pokemonUrl}
        alt={pokemonName}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px 10px 0 0",
        }}
      />
      <h2 style={{ margin: "20px auto" }}>{pokemonName}</h2>
    </div>
  );
};

export default PokemonCard;
