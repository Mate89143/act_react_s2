export default function TarjetaDinamica({
  titulo,
  contenido,
  colorFondo = '#ffffff',
  colorTexto = '#333333',
  ancho = '300px',
  activo = false
}) {
  const estilosTarjeta = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: '1.5rem',
    margin: '1rem 0',
    borderRadius: '8px',
    border: activo ? '2px solid #007bff' : '1px solid #e0e0e0',
    boxShadow: activo 
      ? '0 4px 12px rgba(0, 123, 255, 0.3)' 
      : '0 2px 4px rgba(0, 0, 0, 0.1)',
    transform: activo ? 'scale(1.02)' : 'scale(1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const estilosTitulo = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: activo ? '#007bff' : colorTexto
  };

  const estilosContenido = {
    lineHeight: '1.5',
    opacity: activo ? 1 : 0.8
  };

  return (
    <div style={estilosTarjeta}>
      <h3 style={estilosTitulo}>{titulo}</h3>
      <p style={estilosContenido}>{contenido}</p>
    </div>
  );
}