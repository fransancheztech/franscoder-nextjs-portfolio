const { useRouter } = require('next/router');
import en from '../../messages/en.json';
import es from '../../messages/es.json';

const useLanguage = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return {router, locale, t};
};

export default useLanguage
