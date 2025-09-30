export default function TarjetaTailwind({
  titulo,
  descripcion,
  imagen,
  etiqueta
}) {
  return (
    <div className="flex flex-col w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden m-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {imagen && (
        <div className="w-full h-40 bg-gray-200 overflow-hidden">
          <img 
            src={imagen} 
            alt={titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{titulo}</h3>
          {etiqueta && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {etiqueta}
            </span>
          )}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{descripcion}</p>
      </div>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
          Ver más
        </button>
      </div>
    </div>
  );
}