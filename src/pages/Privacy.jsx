import { Shield, Lock, Database, Eye, AlertCircle } from 'lucide-react'

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Shield className="w-16 h-16 text-blue-400 mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Aviso de Privacidad</h1>
        <p className="text-slate-400 text-lg">
          Última actualización: Mayo 2024
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            Resumen de Privacidad
          </h2>
          <p className="text-slate-300">
            En nuestra aplicación de estaciones de radio, <strong className="text-white">NO recolectamos, almacenamos ni procesamos ningún dato personal del usuario</strong>. 
            Toda la información se mantiene exclusivamente en tu dispositivo mediante almacenamiento local.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Database className="w-6 h-6 text-green-400" />
            Datos que NO Recoleccionamos
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">Nombre, correo electrónico o cualquier información de identificación personal</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">Historial de escucha o patrones de uso</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">Ubicación geográfica o datos del dispositivo</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">Dirección IP o información de conexión</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span><strong className="text-white">Cookies de seguimiento o analytics</strong></span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Lock className="w-6 h-6 text-purple-400" />
            Almacenamiento Local
          </h2>
          <p className="text-slate-300 mb-4">
            La única información que se guarda en tu dispositivo es:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Estaciones de radio favoritas</strong> - Se guardan en el localStorage del navegador</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Preferencias de volumen</strong> - Se guardan en el localStorage del navegador</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">Configuración de tema (claro/oscuro)</strong> - Se guarda en el localStorage del navegador</span>
            </li>
          </ul>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-4">
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Importante:</strong> Estos datos locales pueden ser eliminados en cualquier momento 
              borrando la caché del navegador o usando la opción de "limpiar datos" de la aplicación.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Eye className="w-6 h-6 text-yellow-400" />
            Transmisión de Audio
          </h2>
          <p className="text-slate-300 mb-4">
            La aplicación reproduce streams de audio proporcionados por las estaciones de radio. 
            Esta transmisión:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">→</span>
              <span>Se realiza directamente entre tu dispositivo y el servidor de la estación de radio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">→</span>
              <span>No pasa por nuestros servidores</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">→</span>
              <span>No registramos qué estaciones escuchas</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-400" />
            Tus Derechos
          </h2>
          <p className="text-slate-300 mb-4">
            Dado que no recolectamos datos personales:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">No tienes que preocuparte por el derecho al olvido</strong> - No tenemos datos que olvidar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">No hay portabilidad de datos</strong> - Tus datos ya están en tu dispositivo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong className="text-white">No hay acceso a datos</strong> - No tenemos nada a lo que acceder</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-slate-300">
            Si tienes preguntas sobre este aviso de privacidad, puedes contactarnos a través de 
            los canales proporcionados en la aplicación.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Privacy
