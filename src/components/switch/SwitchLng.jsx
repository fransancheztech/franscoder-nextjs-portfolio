import { useState } from 'react';
import useLanguage from '../../hooks/useLanguage';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const SwitchLng = () => {
    const { router, locale, t } = useLanguage();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const changeLanguage = (newLocale) => {
        router.push('/', '/', { locale: newLocale });
    };

    return (
        <div className='language-switcher-label relative'>
            <div
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                className='w-full flex justify-center items-center h-full text-lg select-none gap-1 lang-switcher-button'>
                {locale.toUpperCase()}
                {isLanguageOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {isLanguageOpen && (
                <div className='absolute top-full left-0 mt-2 w-[60px] rounded-md shadow-lg lang-switcher-dropdown'>
                    <div
                        onClick={() => {
                            changeLanguage('en');
                            setIsLanguageOpen(false);
                        }}
                        className='px-3 py-2 cursor-pointer text-lg'>
                        EN
                    </div>
                    <div
                        onClick={() => {
                            changeLanguage('es');
                            setIsLanguageOpen(false);
                        }}
                        className='px-3 py-2 cursor-pointer text-lg'>
                        ES
                    </div>
                </div>
            )}
        </div>
    );
};

export default SwitchLng;
