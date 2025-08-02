import React, { useState } from 'react';

const App = () => {
  const [section, setSection] = useState("inicio");

  const renderContent = () => {
    switch (section) {
      case "inicio":
        return <p>Bienvenido a tu sistema inteligente para camioneros.</p>;
      case "viajes":
        return <p>Aquí se mostrarán tus viajes registrados.</p>;
      case "gastos":
        return <p>Sección de gastos y costos operativos.</p>;
      case "subir":
        return <p>Sube aquí tus rate confirmations (PDF).</p>;
      case "resumen":
        return <p>Resumen financiero del mes.</p>;
      default:
        return <p>Selecciona una sección.</p>;
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Truck Cash Pro 1</h2>
        <nav>
          <ul>
            <li onClick={() => setSection("inicio")}>Inicio</li>
            <li onClick={() => setSection("viajes")}>Viajes</li>
            <li onClick={() => setSection("gastos")}>Gastos</li>
            <li onClick={() => setSection("subir")}>Subir Rate</li>
            <li onClick={() => setSection("resumen")}>Resumen</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
