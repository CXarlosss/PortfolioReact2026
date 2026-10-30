import { createContext, useContext, useEffect, useState } from 'react';
import { dictionary } from '~/utils/dictionary';

const LanguageContext = createContext({});

export const LanguageProvider = ({ language: initialLanguage, toggleLanguage, children }) => {
  const [language, setLanguage] = useState(initialLanguage || 'es');

  useEffect(() => {
    if (initialLanguage) {
      setLanguage(initialLanguage);
    }
  }, [initialLanguage]);

  const dictionaryData = dictionary[language] || dictionary['es'];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dictionary: dictionaryData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
