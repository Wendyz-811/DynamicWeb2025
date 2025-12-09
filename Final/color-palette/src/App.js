import {useState} from 'react'
import GeneratorPage from './pages/GeneratorPage'
import SavedPalettesPage from './pages/SavedPalettesPage'
import {HiSparkles, HiBookmark} from 'react-icons/hi2'

export default function App() {
  const [currentPage, setCurrentPage] = useState('generator')

  let content
  if (currentPage === 'generator') {
    content = <GeneratorPage />
  } else if (currentPage === 'saved') {
    content = <SavedPalettesPage />
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow mb-4">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-600">
               Color Palette Generator
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('generator')}
                className={`px-4 py-2 rounded flex items-center gap-2 ${
                  currentPage === 'generator'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                <HiSparkles className="text-xl" />
                <span>Generate</span>
              </button>
              <button
                onClick={() => setCurrentPage('saved')}
                className={`px-4 py-2 rounded flex items-center gap-2 ${
                  currentPage === 'saved'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                <HiBookmark className="text-xl" />
                <span>Saved Palettes</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div>{content}</div>
    </div>
  )
}