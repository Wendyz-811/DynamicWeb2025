import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const PalettesContext = createContext()

function Provider({children}) {
  const [palettes, setPalettes] = useState([])

  // Fetch all palettes 
  const fetchPalettes = async () => {
    const response = await axios.get('http://localhost:3001/palettes')
    setPalettes(response.data)
  }

  useEffect(() => {
    fetchPalettes()
  }, [])

  // Create a new palette
  const createPalette = async (palette) => {
    const response = await axios.post('http://localhost:3001/palettes', palette)
    const updatedPalettes = [...palettes, response.data]
    setPalettes(updatedPalettes)
  }

  // Delete a palette
  const deletePalette = async (id) => {
    await axios.delete(`http://localhost:3001/palettes/${id}`)
    const updatedPalettes = palettes.filter((palette) => palette.id !== id)
    setPalettes(updatedPalettes)
  }

  // Edit palette name
  const editPalette = async (id, newName) => {
    const palette = palettes.find((p) => p.id === id)
    const response = await axios.put(`http://localhost:3001/palettes/${id}`, {
      ...palette,
      name: newName,
    })

    const updatedPalettes = palettes.map((p) => {
      if (p.id === id) {
        return response.data
      }
      return p
    })
    setPalettes(updatedPalettes)
  }

  const valuesToShare = {
    palettes,
    createPalette,
    deletePalette,
    editPalette,
  }

  return (
    <PalettesContext.Provider value={valuesToShare}>
      {children}
    </PalettesContext.Provider>
  )
}

export {Provider}
export default PalettesContext