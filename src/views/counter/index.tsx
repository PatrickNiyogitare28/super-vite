import React, { FC } from 'react'
import CounterComponent from '@components/counter'
import AppNav from '@components/app-nav'
import { classNames } from 'classnames-generics'
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import "@locales/i18n";

const Counter = () => {
    const {t} = useTranslation();
    const features = [
        ' scss, ',
        'tailwind css, ',
        'tslint, ',
        'prittier, ',
        'jest, ',
        'redux tool kit, ',
        'github actions, ',
        'i18n internationalization & ',
        'Docker',
    ]
    return (
        <div className={classNames(styles.counterView)}  data-testid="counter-view">
            <AppNav />
            <h1 className="font-bold">
               {t('welcome')}
                <small>
                    {t('label')}
                    {features.map((feature, index) => (
                        <code key={`${index}`}>{feature}</code>
                    ))}
                </small>
            </h1>

            <div>
                <CounterComponent />
            </div>
        </div>
    )
}

export default Counter
