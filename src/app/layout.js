// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Demo Estilos CSS',
  description: 'Demostración de diferentes métodos de estilizado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}