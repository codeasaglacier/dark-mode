import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = () => {

  const [ value, setValue ] = useLocalStorage( 'darkMode' )

  useEffect( () => {
    // ( value ) ? window.document.body.classList.add( 'dark-mode_toggle' ) :
    // window.document.body.classList.remove( 'dark-mode_toggle' ) 
    if ( value ) {
      window.document.body.classList.add( 'dark-mode' )
    }
    else {
      window.document.body.classList.remove( 'dark-mode' )
    }
  }, [ value ] )

  return [ value, setValue ]
}