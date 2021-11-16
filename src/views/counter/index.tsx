import CounterComponent from '@components/counter';
import AppNav from '@components/counter/app-nav';
import { classNames } from 'classnames-generics';
import React, {FC} from 'react';
import styles from './styles.module.scss';

const Counter= () => {
    return (
        <div className={classNames(styles.counterView)}>
            <AppNav />
            <h1 className="font-bold">Welcome to Super Vite ⚡
             <small>React Typescript vite boilerplate with pre-configured scss, tailwind, jest, redux tool-kit, tslint, github actions & Docker</small>
            </h1>

            <div>
              <CounterComponent />
            </div>
        </div>
    )
}

export default Counter;