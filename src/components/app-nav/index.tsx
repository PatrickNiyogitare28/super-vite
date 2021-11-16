import React, { FC } from 'react'
import GithubIcon from '../../assets/icons/github.png';
import { langs } from '@locales/langs';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'

const AppNav: FC = () => {
    const {i18n} = useTranslation();
    return (
        <div className={styles.appNavContainer}>
            <ul>
                {langs.map((lang) => (
                    <li 
                    key={lang.abbr} 
                    onClick={() => i18n.changeLanguage(lang.abbr)}
                    style={{color: i18n.resolvedLanguage === lang.abbr ? '#ffc629' : 'white'}}
                    >{lang.displayedAbbr}</li>
                ))}
            </ul>
            <a
                href="https://github.com/PatrickNiyogitare28/super-vite.git"
                target="_blank"
            >
                <img src={GithubIcon} alt="Github icon" />
            </a>
        </div>
    )
}
export default AppNav
