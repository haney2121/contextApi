import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = props => {
  const [language, setLanguage] = useState('german');

  const changeLanguage = (e) => setLanguage(e.target.value)

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

//HOC - with using class components non hooks - when using two or more context
// export const withLanguageContext = Component => props => (
//   <LanguageContext.Consumer>
//     {value => <Component languageContext={value} {...props} />}
//   </LanguageContext.Consumer>
// )