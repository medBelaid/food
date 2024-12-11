import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants';

const LanguageSelector = ({ visible, onClose }) => {
  const { i18n } = useTranslation()
  const [menuPosition, setMenuPosition] = useState(false)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.code)
    onClose()
  }
  useEffect(() => {
    document.body.dir = i18n.dir()
  },[i18n, i18n.language])
  useEffect(() => {
    setMenuPosition(document.body.dir === 'rtl' ? 'left-6' : 'right-7')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[document.body.dir])

  return (
    <div
      id="myDropdown"
      className={`flex flex-col gap-3 dropdownlist absolute bg-gray-900 text-white ${menuPosition} top-12 mt-2 p-3 overflow-auto z-30 ${!visible && 'invisible'}`}
    >
      {LANGUAGES.map(lng => 
      <button
        key={lng.code}
        onClick={() => changeLanguage(lng)}
        className={`p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline no-border block ${i18n.language === lng.code && 'bg-green-700 text-green-100 hover:bg-green-800 hover:text-green-100'}`}
      >
        {lng.lang}
      </button>
    )}
    </div>
  );
};

export default LanguageSelector;
