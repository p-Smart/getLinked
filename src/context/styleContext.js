import { createContext } from 'react';
import { useContext } from 'react';

const StyleContext = createContext();


export const useStyleContext = () => {

    return useContext(StyleContext)
}

export default StyleContext

