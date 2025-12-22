import { useState, useEffect, useRef } from 'react';
import useLanguage from '../../hooks/useLanguage';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SwitchLng = () => {
    const { router, locale } = useLanguage();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const switcherRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isLanguageOpen && switcherRef.current && !switcherRef.current.contains(event.target)) {
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLanguageOpen]);

    const changeLanguage = (newLocale) => {
        router.replace(router.asPath, router.asPath, {
            locale: newLocale,
            scroll: false
        });
    };

    return (
        <div ref={switcherRef} className='language-switcher-label relative'>
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
                        className='px-3 py-2 cursor-pointer text-lg lang-switcher-dropdown-btn1'>
                        EN
                    </div>
                    <div
                        onClick={() => {
                            changeLanguage('es');
                            setIsLanguageOpen(false);
                        }}
                        className='px-3 py-2 cursor-pointer text-lg lang-switcher-dropdown-btn2'>
                        ES
                    </div>
                </div>
            )}
        </div>
    );
};

export default SwitchLng;
