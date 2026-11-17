import TarjetaAprendiz from "./components/TarjetaAprendiz.jsx";
import TarjetaProducto from "./components/TarjetaProducto.jsx";
import "./styles/tarjetas.css";

function App() {
  const aprendices = [
    { id: 1, nombre: "Pipe", programa: "Topología" },
    { id: 2, nombre: "Ana", programa: "Arquitectura" },
    { id: 3, nombre: "Yuliza", programa: "Desarrollador de software" }
  ];

  const productos = [
    {
      id: 1,
      nombre: "Gorra",
      precio: "$25.000",
      categoria: "Accesorios",
      imagen: "/productos/gorra.jpg"
    },
    {
      id: 2,
      nombre: "Zapatos",
      precio: "$120.000",
      categoria: "Calzado",
      imagen: "/productos/zapatos.jpg"
    },
    {
      id: 3,
      nombre: "Camisa",
      precio: "$50.000",
      categoria: "Ropa",
      imagen: "/productos/camisa.jpg"
    }
  ];

  return (
    <main className="contenedor">
      <section className="seccion">
        <h1>Tarjetas de aprendices</h1>

        <div className="tarjetas">
          {aprendices.map((aprendiz) => (
            <TarjetaAprendiz
              key={aprendiz.id}
              nombre={aprendiz.nombre}
              programa={aprendiz.programa}
            />
          ))}
        </div>
      </section>

      <section className="seccion">
        <h1>Tarjetas de productos</h1>

        <div className="tarjetas">
          {productos.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              categoria={producto.categoria}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
