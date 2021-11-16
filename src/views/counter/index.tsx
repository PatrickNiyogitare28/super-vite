import CounterComponent from '@components/counter';
import { classNames } from 'classnames-generics';
import React, {FC} from 'react';
import styles from './styles.module.scss';

const Counter= () => {
    return (
        <div className={classNames(styles.counterView)}>
            <h1>This is my Counter page Hello</h1>
            <div>
              <CounterComponent />
            </div>
        </div>
    )
}

export default Counter;