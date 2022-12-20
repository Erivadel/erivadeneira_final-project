//import { render, screen } from "@testing-library/jest-dom";
import { configure } from "enzyme";
import { EnzymeAdapter } from "enzyme";
import { render, screen } from "@testing-library/react";
import App from "../App";

configure({ adapter: new EnzymeAdapter() });
test("renders App", async () => {
  render(<App />);
  const h1 = await screen.findByText("Assets Designe");
  const h2 = await screen.findByText("Proyectamos y diseñamos");
  const h3 = await screen.findByText(
    "Diseño Arquitectónico 💻 Modelado 3D Renders/Ilustraciones"
  );
  const p1 = await screen.findByText(
    "Cada proyecto lo trabajamos desde la máxima exigencia para que la Arquitectura final sea el resultado de la mezcla perfecta entre las necesidades del cliente y el diseño exclusivo integrado en el lugar."
  );
  const p2 = await screen.findByText(
    "Con este concepto conseguimos que cada proyecto se envuelva de la esencia arquitectónica necesaria para que todo fluya sin interferencias y consiguiendo viviendas de gran calidad con precios finales muy competitivos."
  );
  const h4 = await screen.findByText(
    "Hormigón visto, madera, piedra natural, materiales mediterráneos y vidrio..."
  );
  const p3 = await screen.findByText(
    'Utilizamos los materiales nobles como elemento de distinción y integración creando espacios exteriores e interiores de gran calidez y dotando a cada vivienda de una evidente sensación de "hogar" y utilizando la luz como elemento vertebrador de cada espacio.'
  );
  expect(h1).toBeInTheDocument();
  expect(h2).toBeInTheDocument();
  expect(h3).toBeInTheDocument();
  expect(h4).toBeInTheDocument();
  expect(p1).toBeInTheDocument();
  expect(p2).toBeInTheDocument();
  expect(p3).toBeInTheDocument();
});
