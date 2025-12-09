import PaletteList from '../components/PaletteList'
import usePalettesContext from '../hooks/use-palettes-context'
import Card from '../components/Card'

export default function SavedPalettesPage() {
  const {palettes, deletePalette, editPalette} = usePalettesContext()

  return (
    <Card className="mx-2 my-2">
      <h2 className="text-2xl font-bold mb-4">
        All Saved Palettes ({palettes.length})
      </h2>
      <PaletteList
        palettes={palettes}
        onDelete={deletePalette}
        onEdit={editPalette}
      />
    </Card>
  )
}