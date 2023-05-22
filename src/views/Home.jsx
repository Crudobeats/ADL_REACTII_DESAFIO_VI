import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../assets/HomeStyle.css";

export default function Home() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const { results } = await res.json();
        setResults(results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const navigate = useNavigate();

  const handlePokemonClick = () => {
    if (name) {
      navigate(`/Pokemon/${name}`);
    }
  };

  return (
    <div className="form-container">
      <Form.Select
        className="container-select"
        aria-label="Default select example"
        onChange={(e) => setName(e.target.value)}>
          <option value="">Selecciona un Pokémon</option>
        {isLoading ? (
          <option>Loading...</option>
        ) : (
          results.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))
        )}
      </Form.Select>
      <Button className="button-form" onClick={handlePokemonClick}>
        Ver Más info del Pokémon
      </Button>
    </div>
  );
}
