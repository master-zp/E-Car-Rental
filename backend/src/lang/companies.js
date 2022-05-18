import LocalizedStrings from 'react-localization';
import Env from '../config/env.config';
import UserService from '../services/UserService';

export const strings = new LocalizedStrings({
    fr: {
        NEW_COMPANY: 'Nouvelle société',
        COMPANY: 'société',
        COMPANIES: 'sociétés'
    },
    en: {
        NEW_COMPANY: 'New company',
        COMPANY: 'company',
        COMPANIES: 'companies'
    }
});

let language = UserService.getQueryLanguage();

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage();
}

strings.setLanguage(language);
