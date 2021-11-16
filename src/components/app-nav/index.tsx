import React, { FC } from 'react'
import GithubIcon from '../../assets/icons/github.png';
import styles from './styles.module.scss'

const AppNav: FC = () => {
    return (
        <div className={styles.appNavContainer}>
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
