import { useState, useEffect } from 'react'

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(() =>
    // ? handle `ReferenceError: window is not defined` error caused by calling the window object from the server (with a console.log in Next.js)
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}

export default useWindowWidth

// How to import the hook in your component
// import useWindowWidth from '@/hooks/useWindowWidth'
// const windowWidth = useWindowWidth()
// {windowWidth > 768 ? <p>Desktop</p> : <p>Mobile</p>}
