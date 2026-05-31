import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Shield, FileText, Megaphone, Home as HomeIcon } from 'lucide-react'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Ads from './pages/Ads'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
                <Megaphone className="w-6 h-6" />
                <span>Radio Station</span>
              </Link>
              <div className="flex gap-6">
                <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <HomeIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Inicio</span>
                </Link>
                <Link to="/privacy" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">Privacidad</span>
                </Link>
                <Link to="/terms" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Términos</span>
                </Link>
                <Link to="/ads" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <Megaphone className="w-4 h-4" />
                  <span className="hidden sm:inline">Anuncios</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ads" element={<Ads />} />
        </Routes>

        <footer className="bg-slate-900 border-t border-slate-700 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="text-center text-slate-400 text-sm">
              <p className="mb-4">© 2024 Radio Station. Todos los derechos reservados.</p>
              <div className="flex justify-center gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Términos de Uso</Link>
                <Link to="/ads" className="hover:text-white transition-colors">Política de Anuncios</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
