//import { render, screen } from "@testing-library/jest-dom";
import { configure } from "enzyme";
import { EnzymeAdapter } from "enzyme";
import { render, screen } from "@testing-library/react";
import App from "../App";

configure({ adapter: new EnzymeAdapter() });
test("renders App", async () => {
  render(<App />);
  const h1 = await screen.findByText("Assets Designe");
  const h2 = await screen.findByText("Proyectamos y dise帽amos");
  const h3 = await screen.findByText(
    "Dise帽o Arquitect贸nico 馃捇 Modelado 3D Renders/Ilustraciones"
  );
  const p1 = await screen.findByText(
    "Cada proyecto lo trabajamos desde la m谩xima exigencia para que la Arquitectura final sea el resultado de la mezcla perfecta entre las necesidades del cliente y el dise帽o exclusivo integrado en el lugar."
  );
  const p2 = await screen.findByText(
    "Con este concepto conseguimos que cada proyecto se envuelva de la esencia arquitect贸nica necesaria para que todo fluya sin interferencias y consiguiendo viviendas de gran calidad con precios finales muy competitivos."
  );
  const h4 = await screen.findByText(
    "Hormig贸n visto, madera, piedra natural, materiales mediterr谩neos y vidrio..."
  );
  const p3 = await screen.findByText(
    'Utilizamos los materiales nobles como elemento de distinci贸n y integraci贸n creando espacios exteriores e interiores de gran calidez y dotando a cada vivienda de una evidente sensaci贸n de "hogar" y utilizando la luz como elemento vertebrador de cada espacio.'
  );
  expect(h1).toBeInTheDocument();
  expect(h2).toBeInTheDocument();
  expect(h3).toBeInTheDocument();
  expect(h4).toBeInTheDocument();
  expect(p1).toBeInTheDocument();
  expect(p2).toBeInTheDocument();
  expect(p3).toBeInTheDocument();
});
