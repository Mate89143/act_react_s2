import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Demostración de Métodos de Estilizado
        </h1>
        
        {/* Sección CSS Global */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            CSS Global
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TarjetaGlobal
              titulo="Tarjeta con CSS Global"
              contenido="Esta tarjeta utiliza estilos globales definidos en globals.css. Los estilos son reutilizables en toda la aplicación."
              color="#007bff"
            />
            <TarjetaGlobal
              titulo="Ejemplo de Reutilización"
              contenido="Mismo componente con diferentes colores, demostrando la reutilización de estilos globales."
              color="#28a745"
            />
          </div>
        </section>

        {/* Sección Módulos CSS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Módulos CSS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TarjetaModulo
              nombre="Tarjeta Primaria"
              descripcion="Esta tarjeta utiliza CSS Modules para estilos encapsulados y específicos del componente."
              categoria="Módulo"
              variante="primaria"
            />
            <TarjetaModulo
              nombre="Tarjeta Secundaria"
              descripcion="Variante secundaria con diferentes colores usando composición de clases."
              categoria="Módulo"
              variante="secundaria"
            />
            <TarjetaModulo
              nombre="Tarjeta Éxito"
              descripcion="Variante de éxito demostrando múltiples opciones de estilizado."
              categoria="Módulo"
              variante="exito"
            />
          </div>
        </section>

        {/* Sección Estilos en Línea */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Estilos en Línea
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TarjetaDinamica
              titulo="Tarjeta Dinámica"
              contenido="Esta tarjeta utiliza estilos en línea completamente dinámicos basados en props."
              colorFondo="#f8f9fa"
              colorTexto="#495057"
              ancho="100%"
              activo={false}
            />
            <TarjetaDinamica
              titulo="Tarjeta Activa"
              contenido="Estado activo con estilos condicionales aplicados dinámicamente."
              colorFondo="#e7f3ff"
              colorTexto="#0056b3"
              ancho="100%"
              activo={true}
            />
          </div>
        </section>

        {/* Sección Tailwind CSS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Tailwind CSS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TarjetaTailwind
              titulo="Tarjeta Moderna"
              descripcion="Diseño moderno utilizando únicamente clases de Tailwind CSS para un desarrollo rápido y consistente."
              etiqueta="Nuevo"
            />
            <TarjetaTailwind
              titulo="Con Imagen"
              descripcion="Tarjeta que incluye imagen y utiliza el sistema de utilidades de Tailwind para el diseño."
              imagen="https://via.placeholder.com/256x160"
              etiqueta="Popular"
            />
            <TarjetaTailwind
              titulo="Tarjeta Simple"
              descripcion="Ejemplo minimalista que demuestra la flexibilidad del sistema de clases de Tailwind."
            />
          </div>
        </section>

        {/* Comparación */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Comparación de Métodos
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Método</th>
                  <th className="px-4 py-2 text-left">Ventajas</th>
                  <th className="px-4 py-2 text-left">Desventajas</th>
                  <th className="px-4 py-2 text-left">Casos de Uso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">CSS Global</td>
                  <td className="border px-4 py-2">Reutilizable, consistente</td>
                  <td className="border px-4 py-2">Posibles conflictos de nombres</td>
                  <td className="border px-4 py-2">Estilos base, temas globales</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">CSS Modules</td>
                  <td className="border px-4 py-2">Encapsulado, sin conflictos</td>
                  <td className="border px-4 py-2">Configuración adicional</td>
                  <td className="border px-4 py-2">Componentes específicos</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Estilos en Línea</td>
                  <td className="border px-4 py-2">Máxima flexibilidad</td>
                  <td className="border px-4 py-2">Menos rendimiento</td>
                  <td className="border px-4 py-2">Estilos dinámicos</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tailwind CSS</td>
                  <td className="border px-4 py-2">Desarrollo rápido</td>
                  <td className="border px-4 py-2">Curva de aprendizaje</td>
                  <td className="border px-4 py-2">Prototipado, diseño sistemático</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}