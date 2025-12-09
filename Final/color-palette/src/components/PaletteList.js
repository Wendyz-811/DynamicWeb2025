import PaletteCard from './PaletteCard'

export default function PaletteList({palettes, onDelete, onEdit}) {
  if (palettes.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No palettes yet. Generate and save some!
      </div>
    )
  }

  return (
    <div>
      {palettes.map((palette) => (
        <PaletteCard
          key={palette.id}
          palette={palette}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}