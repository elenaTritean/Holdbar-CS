{/*Font will be used in almost every component. This is a context API to manage all font styles centrally.
This approach ensures that font styles are loaded once when the page initializes.*/}

import React, { createContext, useContext } from 'react';



const fontStyles = {
  heading1: { fontWeight: 500, fontSize: "60px", lineHeight: "120%" },
  heading2: { fontWeight: 400, fontSize: "60px", lineHeight: "120%" },
  heading3: { fontWeight: 500, fontSize: "44px", lineHeight: "120%" },
  heading4: { fontWeight: 400, fontSize: "44px", lineHeight: "120%" },
  heading5: { fontWeight: 500, fontSize: "30px", lineHeight: "120%" },
  heading6: { fontWeight: 400, fontSize: "30px", lineHeight: "120%" },
  extraLargeTextMedium: { fontWeight: 500, fontSize: "24px", lineHeight: "140%" },
  extraLargeTextNormal: { fontWeight: 400, fontSize: "24px", lineHeight: "140%" },
  largeTextMedium: { fontWeight: 500, fontSize: "18px", lineHeight: "140%" },
  largeTextNormal: { fontWeight: 400, fontSize: "18px", lineHeight: "150%" },
  mediumTextMedium: { fontWeight: 500, fontSize: "16px", lineHeight: "150%" },
  mediumTextNormal: { fontWeight: 400, fontSize: "16px", lineHeight: "150%" },
  smallTextMedium: { fontWeight: 500, fontSize: "14px", lineHeight: "150%" },
  smallTextNormal: { fontWeight: 400, fontSize: "14px", lineHeight: "150%" },
  extraSmallTextMedium: { fontWeight: 500, fontSize: "12px", lineHeight: "160%" },
  extraSmallTextNormal: { fontWeight: 400, fontSize: "12px", lineHeight: "160%" },
  tinyTextMedium: { fontWeight: 500, fontSize: "10px", lineHeight: "160%" },
  tinyTextNormal: { fontWeight: 400, fontSize: "10px", lineHeight: "160%" },
  linkMedium: { fontWeight: 500, fontSize: "14px", lineHeight: "150%" },
  linkNormal: { fontWeight: 400, fontSize: "14px", lineHeight: "150%" },
}

{/*Context API first step: create*/ }
const FontContext = createContext(fontStyles);


{/*Context API second step:provide*/ }
export const FontProvider = ({ children }) => {


  return (
    <FontContext.Provider value={fontStyles}>
      {children}
    </FontContext.Provider>
  )
}

export const useFontStyles = () => useContext(FontContext);