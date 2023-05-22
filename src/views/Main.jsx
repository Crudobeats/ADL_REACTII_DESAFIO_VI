import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "../assets/NavbarStyle.css";

export default function Main() {
  return (
    <div className="main-card">
      <Card style={{ width: "58rem" }}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Bienvenido Maestro Pokémon</Card.Title>
            <Card.Img
              variant="top"
              src="https://wallpapercave.com/wp/KH4slOO.jpg"
            />
            <Card.Text>
              Aquí podrás encontrar información de los Pokémon para tu viaje
            </Card.Text>
            <Link to="/Home">
              <button className="boton-ir">
                Ir a Descubrir tu Pokémon Favorito
              </button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">
            Desarrollado para Desafío Latam | 2023
          </Card.Footer>
        </Card>
      </Card>
    </div>
  );
}
