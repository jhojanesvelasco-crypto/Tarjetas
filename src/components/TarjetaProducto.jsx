function TarjetaProducto({ nombre, precio, categoria, imagen }) {
  return (
    <article className="tarjeta tarjeta-producto">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Precio: {precio}</p>
      <p>Categoría: {categoria}</p>
    </article>
  );
}

export default TarjetaProducto;