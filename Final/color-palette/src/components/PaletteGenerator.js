import {useState} from 'react'
import randomColor from 'randomcolor'
import ColorBox from './ColorBox'
import Card from './Card'
import Button from './Button'

export default function PaletteGenerator({onSave}) {
  const [colors, setColors] = useState([])

  const generatePalette = () => {
    const newColors = randomColor({count: 5, luminosity: 'bright'})
    setColors(newColors)
  }

  const handleSave = () => {
    if (colors.length === 0) {
      alert('Please generate a palette first!')
      return
    }
    onSave(colors)
  }

  return (
    <Card className="mx-2 my-2">
      <h2 className="text-2xl font-bold mb-4">Generate Color Palette</h2>

      <div className="flex gap-2 mb-4">
        <Button primary rounded onClick={generatePalette}>
           Generate Random Palette
        </Button>
        <Button success rounded onClick={handleSave}>
           Save Palette
        </Button>
      </div>

      {colors.length > 0 && (
        <div className="grid grid-cols-5 gap-2">
          {colors.map((color, index) => (
            <ColorBox key={index} color={color} />
          ))}
        </div>
      )}
    </Card>
  )
}