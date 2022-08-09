import React from 'react'
import { createPortal } from 'react-dom'

function Portal({children,selector}) {

  const rootElemnt=selector&&document.getElementById(selector);

  return (
    <>
    {
      rootElemnt?createPortal(children,rootElemnt):children
    }
    </>
  )
}

export default Portal