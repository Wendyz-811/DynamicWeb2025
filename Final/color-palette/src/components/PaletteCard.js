import {useState} from 'react'
import Card from './Card'
import Button from './Button'
import ColorBox from './ColorBox'

export default function PaletteCard({palette, onDelete, onEdit}) {
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState(palette.name)

  const handleEdit = () => {
    onEdit(palette.id, newName)
    setIsEditing(false)
  }

  return (
    <Card className="mb-4">
      <div className="flex justify-between items-center mb-3">
        {isEditing ? (
          <div className="flex gap-2 flex-1">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <Button success onClick={handleEdit}>
              Save
            </Button>
            <Button outline onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
        ) : (
          <>
            <div>
              <h3 className="text-xl font-bold">{palette.name}</h3>
              {palette.tags && palette.tags.length > 0 && (
                <div className="flex gap-1 mt-1">
                  {palette.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Button success outline onClick={() => setIsEditing(true)}>
                Edit
              </Button>
              <Button danger outline onClick={() => onDelete(palette.id)}>
                Delete
              </Button>
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-5 gap-2">
        {palette.colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </Card>
  )
}