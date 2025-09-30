export default function TarjetaGlobal({ titulo, contenido, color }) {
  return (
    <div 
      className="tarjeta-global" 
      style={{ borderColor: color }}
    >
      <h2 className="titulo-global">{titulo}</h2>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
}