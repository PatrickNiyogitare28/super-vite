import CounterComponent from '@components/counter'
import AppNav from '@components/app-nav'
import { classNames } from 'classnames-generics'
import React, { FC } from 'react'
import styles from './styles.module.scss'

const Counter = () => {
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
                Welcome to Super Vite ⚡
                <small>
                    React Typescript vite boilerplate with pre-configured
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
