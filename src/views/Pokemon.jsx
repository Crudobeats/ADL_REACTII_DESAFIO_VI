import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import "../assets/NavbarStyle.css";

export default function Pokemon() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPokemonData(data);
      } catch (error) {
        console.log("Error de Fetching", error);
      }
    };
    fetchData();
  }, [name]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      <div>
        <Card style={{ width: "30rem" }}>
          <Card.Img
            variant="top"
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <Card.Body>
            <Card.Title className="title-title">{pokemonData.name}</Card.Title>
            <Card.Text className="text-card">
              <div>
                <h5 className="title-card">Stats:</h5>
                <ul>
                  {pokemonData.stats.map((stat, index) => (
                    <li key={index}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/">
              <button className="boton-ir">
                Volver al Home
              </button>
            </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
