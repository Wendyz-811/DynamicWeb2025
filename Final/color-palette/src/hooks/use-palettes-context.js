import {useContext} from 'react'
import PalettesContext from '../context/palettes'

const usePalettesContext = () => {
  return useContext(PalettesContext)
}

export default usePalettesContext