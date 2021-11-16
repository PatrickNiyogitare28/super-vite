import CounterComponent from '@components/counter';
import { classNames } from 'classnames-generics';
import React, {FC} from 'react';
import styles from './styles.module.scss';

const Counter= () => {
    return (
        <div className={classNames(styles.counterView)}>
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