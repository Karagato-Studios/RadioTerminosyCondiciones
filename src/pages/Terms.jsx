import { FileText, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <FileText className="w-16 h-16 text-green-400 mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Términos de Uso</h1>
        <p className="text-slate-400 text-lg">
          Última actualización: Mayo 2024
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            Aceptación de Términos
          </h2>
          <p className="text-slate-300">
            Al usar nuestra aplicación de estaciones de radio, aceptas estos términos de uso. 
            Si no estás de acuerdo con alguno de estos términos, por favor no uses la aplicación.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Descripción del Servicio</h2>
          <p className="text-slate-300 mb-4">
            Nuestra aplicación permite a los usuarios:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Escuchar estaciones de radio en streaming desde todo el mundo</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Guardar estaciones favoritas en su dispositivo local</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Buscar y filtrar estaciones por género, país o nombre</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Personalizar la experiencia de escucha</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Uso Permitido</h2>
          <p className="text-slate-300 mb-4">
            Puedes usar nuestra aplicación para:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Uso personal y no comercial</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Escuchar radio para entretenimiento personal</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Compartir la aplicación con otros usuarios</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Uso Prohibido</h2>
          <p className="text-slate-300 mb-4">
            No está permitido:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Uso comercial de la aplicación sin autorización</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Grabar, redistribuir o rebroadcastear el contenido de las estaciones</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Intentar hackear, modificar o alterar la aplicación</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Usar la aplicación para actividades ilegales</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span>Automatizar el acceso a streams de radio</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. Propiedad Intelectual</h2>
          <p className="text-slate-300 mb-4">
            <strong className="text-white">Contenido de las Estaciones:</strong> Todo el contenido de audio transmitido 
            por las estaciones de radio es propiedad exclusiva de sus respectivos dueños y licenciantes. 
            Nosotros solo proporcionamos el medio para acceder a este contenido.
          </p>
          <p className="text-slate-300 mb-4">
            <strong className="text-white">Aplicación:</strong> El código, diseño y funcionalidad de nuestra aplicación 
            son propiedad nuestra y están protegidos por leyes de propiedad intelectual.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">5. Disponibilidad del Servicio</h2>
          <p className="text-slate-300 mb-4">
            <strong className="text-white">Sin Garantía de Disponibilidad:</strong> Las estaciones de radio pueden 
            estar fuera de servicio temporalmente o permanentemente. No garantizamos que todas las estaciones 
            estén disponibles en todo momento.
          </p>
          <p className="text-slate-300 mb-4">
            <strong className="text-white">Calidad del Stream:</strong> La calidad del audio depende del servidor 
            de cada estación de radio y de tu conexión a internet. No somos responsables de la calidad 
            del streaming.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">6. Limitación de Responsabilidad</h2>
          <p className="text-slate-300 mb-4">
            En la máxima medida permitida por la ley:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">→</span>
              <span>No somos responsables por el contenido transmitido por las estaciones de radio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">→</span>
              <span>No garantizamos que el servicio esté libre de interrupciones o errores</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">→</span>
              <span>No somos responsables por daños derivados del uso de la aplicación</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">7. Modificaciones</h2>
          <p className="text-slate-300">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. 
            Las modificaciones entrarán en vigor al publicarse en la aplicación. 
            El uso continuado de la aplicación después de dichas modificaciones constituye 
            la aceptación de los nuevos términos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">8. Ley Aplicable</h2>
          <p className="text-slate-300">
            Estos términos se rigen por las leyes vigentes en tu jurisdicción. 
            Cualquier disputa será resuelta en los tribunales competentes de tu localidad.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Terms
