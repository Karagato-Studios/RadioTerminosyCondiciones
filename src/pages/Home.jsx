import { Link } from 'react-router-dom'
import { Shield, FileText, Megaphone, Lock, Database, Heart } from 'lucide-react'

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Megaphone className="w-20 h-20 text-blue-400 mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-white mb-4">Estaciones de Radio</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Tu aplicación favorita para escuchar estaciones de radio en línea
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Link to="/privacy" className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all group">
          <Shield className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-3">Aviso de Privacidad</h3>
          <p className="text-slate-400">
            Conoce cómo protegemos tu información. No recolectamos ni guardamos datos personales.
          </p>
        </Link>

        <Link to="/terms" className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-green-500 transition-all group">
          <FileText className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-3">Términos de Uso</h3>
          <p className="text-slate-400">
            Las reglas y condiciones para usar nuestra aplicación de radio.
          </p>
        </Link>

        <Link to="/ads" className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition-all group">
          <Megaphone className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-3">Política de Anuncios</h3>
          <p className="text-slate-400">
            Información sobre los anuncios que mostramos en la aplicación.
          </p>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-slate-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Lock className="w-6 h-6 text-blue-400" />
          Tu Privacidad es Nuestra Prioridad
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Database className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-1">Sin Servidores Externos</h4>
              <p className="text-slate-400 text-sm">
                Todos tus datos se almacenan localmente en tu dispositivo. No enviamos información a servidores externos.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Heart className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-1">Favoritos Locales</h4>
              <p className="text-slate-400 text-sm">
                Tus estaciones favoritas se guardan en el almacenamiento local de tu navegador.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-1">Sin Registro</h4>
              <p className="text-slate-400 text-sm">
                No necesitas crear cuenta ni proporcionar información personal para usar la aplicación.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Lock className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-1">Sin Seguimiento</h4>
              <p className="text-slate-400 text-sm">
                No utilizamos cookies de seguimiento ni analytics que recolecten tu información.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
