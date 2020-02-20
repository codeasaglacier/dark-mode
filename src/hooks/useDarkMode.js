import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = () => {
  //this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values
  const [ value, setValue ] = useLocalStorage( 'darkMode' )
  //Import and set up your effect hook.
  useEffect( () => {
    // ( value ) ? window.document.body.classList.add( 'dark-mode_toggle' ) :
    // window.document.body.classList.remove( 'dark-mode_toggle' ) 

    //Inside it, check to see if the value from `useLocalStorage` is true or false. If it's true, add the class `dark-mode` to the `body` element.
    if ( value ) {
      window.document.body.classList.add( 'dark-mode' )
    }
    //If it's false, remove the class from the `body` element.
    else {
      window.document.body.classList.remove( 'dark-mode' )
    }
    //We don't want this effect to run every time anything in the component changes, right? Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.
  }, [ value ] )
  //forward the value and the setter that were returned out of the `useLocalStorage` call.
  return [ value, setValue ]
}