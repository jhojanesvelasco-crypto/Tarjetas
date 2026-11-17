function TarjetaAprendiz({ nombre, programa }) {
  return (
    <article className="tarjeta tarjeta-aprendiz">
      <h2>{nombre}</h2>
      <p>Programa: {programa}</p>
    </article>
  );
}

export default TarjetaAprendiz;
