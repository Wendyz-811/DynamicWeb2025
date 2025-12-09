import {useState} from 'react'
import Button from './Button'

export default function SavePaletteForm({colors, onSave, onCancel}) {
  const [name, setName] = useState('')
  const [tags, setTags] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      alert('Please enter a name!')
      return
    }

    const palette = {
      name: name,
      colors: colors,
      tags: tags.split(',').map((tag) => tag.trim()),
    }

    onSave(palette)
    setName('')
    setTags('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded mb-4">
      <h3 className="font-bold mb-2">Save This Palette</h3>

      <input
        type="text"
        placeholder="Palette name (e.g., Ocean Vibes)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />

      <input
        type="text"
        placeholder="Tags (comma separated, e.g., blue, calm)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <div className="flex gap-2">
        <Button primary type="submit">
          Save
        </Button>
        <Button outline onClick={onCancel} type="button">
          Cancel
        </Button>
      </div>
    </form>
  )
}