import { Megaphone, Eye, CheckCircle, XCircle, Info } from 'lucide-react'

function Ads() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Megaphone className="w-16 h-16 text-purple-400 mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Política de Anuncios</h1>
        <p className="text-slate-400 text-lg">
          Última actualización: Mayo 2024
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-purple-400" />
            Nuestra Filosofía sobre Anuncios
          </h2>
          <p className="text-slate-300">
            Creemos en una experiencia de usuario transparente y respetuosa. 
            Esta política describe cómo manejamos los anuncios en nuestra aplicación.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Eye className="w-6 h-6 text-blue-400" />
            Tipos de Anuncios que Utilizamos
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Anuncios de las Estaciones de Radio</h3>
              <p className="text-slate-300 text-sm">
                Las estaciones de radio pueden incluir sus propios anuncios comerciales en el stream de audio. 
                Estos anuncios son transmitidos directamente por la estación y no tenemos control sobre ellos.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Anuncios en la Interfaz (Opcional)</h3>
              <p className="text-slate-300 text-sm">
                Podemos mostrar anuncios discretos en la interfaz de la aplicación para mantener el servicio gratuito. 
                Estos anuncios son:
              </p>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>No intrusivos y no interrumpen la reproducción</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Relevantes y apropiados para el contexto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Claramente identificados como publicidad</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <XCircle className="w-6 h-6 text-red-400" />
            Tipos de Anuncios que NO Utilizamos
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">Pop-ups o ventanas emergentes</strong> - No interrumpimos tu experiencia</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">Anuncios de audio forzados</strong> - No insertamos anuncios en el stream</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">Anuncios maliciosos o engañosos</strong> - Solo trabajamos con redes publicitarias confiables</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">Anuncios que recolectan datos personales</strong> - Respetamos tu privacidad</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">Retargeting agresivo</strong> - No te perseguimos con anuncios</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Privacidad y Publicidad</h2>
          <p className="text-slate-300 mb-4">
            A diferencia de muchas aplicaciones, nosotros:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">NO creamos perfiles de usuario</strong> para personalizar anuncios</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">NO compartimos tus datos</strong> con terceros para publicidad</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">NO utilizamos cookies de seguimiento</strong> para publicidad comportamental</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">Los anuncios se basan en contexto general</strong>, no en tu historial personal</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Publicidad Comportamental vs. Contextual</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Lo que NO hacemos</h3>
              <p className="text-slate-300 text-sm mb-2">
                <strong className="text-white">Publicidad Comportamental:</strong> Rastrea tu comportamiento 
                en internet para mostrarte anuncios basados en tu historial de navegación.
              </p>
              <p className="text-slate-400 text-xs">
                Ejemplo: Visitas una tienda de zapatos y luego ves anuncios de zapatos en todas partes.
              </p>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Lo que SÍ hacemos</h3>
              <p className="text-slate-300 text-sm mb-2">
                <strong className="text-white">Publicidad Contextual:</strong> Mostramos anuncios basados 
                en el contenido que estás viendo en ese momento.
              </p>
              <p className="text-slate-400 text-xs">
                Ejemplo: Escuchas una estación de rock y ves anuncios relacionados con música.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Redes Publicitarias</h2>
          <p className="text-slate-300 mb-4">
            Si utilizamos redes publicitarias de terceros, solo trabajamos con aquellas que:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Cumplen con estándares de privacidad estrictos</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>No recolectan datos personales sin consentimiento explícito</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Ofrecen anuncios de calidad y seguros</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Permiten el control de tipos de anuncios mostrados</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Opción Sin Anuncios</h2>
          <p className="text-slate-300 mb-4">
            En el futuro, podemos ofrecer:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">Versión Premium</strong> - Pago único para eliminar anuncios permanentemente</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span><strong className="text-white">Donaciones</strong> - Contribuciones voluntarias para apoyar el desarrollo</span>
            </li>
          </ul>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-4">
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Nota:</strong> Incluso si decides no ver anuncios, 
              no podemos eliminar los anuncios que transmiten las estaciones de radio en su stream de audio.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Reportar Anuncios Inapropiados</h2>
          <p className="text-slate-300">
            Si ves un anuncio inapropiado en nuestra aplicación, por favor repórtalo a través de 
            los canales de contacto proporcionados. Tomaremos medidas para eliminarlo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Cambios en esta Política</h2>
          <p className="text-slate-300">
            Nos reservamos el derecho de modificar esta política de anuncios en cualquier momento. 
            Los cambios se publicarán en esta página y entrarán en vigor inmediatamente.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Ads
