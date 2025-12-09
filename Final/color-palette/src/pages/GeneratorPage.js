import {useState} from 'react'
import PaletteGenerator from '../components/PaletteGenerator'
import SavePaletteForm from '../components/SavePaletteForm'
import usePalettesContext from '../hooks/use-palettes-context'

export default function GeneratorPage() {
  const {createPalette} = usePalettesContext()
  const [generatedColors, setGeneratedColors] = useState([])
  const [showSaveForm, setShowSaveForm] = useState(false)

  const handleSave = (colors) => {
    setGeneratedColors(colors)
    setShowSaveForm(true)
  }

  const handleSavePalette = (palette) => {
    createPalette(palette)
    setShowSaveForm(false)
    setGeneratedColors([])
    alert('Palette saved!')
  }

  return (
    <div>
      <PaletteGenerator onSave={handleSave} />
      {showSaveForm && (
        <div className="mx-2 mb-2">
          <SavePaletteForm
            colors={generatedColors}
            onSave={handleSavePalette}
            onCancel={() => setShowSaveForm(false)}
          />
        </div>
      )}
    </div>
  )
}