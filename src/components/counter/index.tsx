import React from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectCount, decrement, increment, reset } from "@redux-slices/counter.slice";
import { ECounterEventType } from "@enums/ECounterEventType";
import styles from './styles.module.scss';

const CounterComponent = () => {
    const dispatch:any = useAppDispatch();
    const value: number = useAppSelector(selectCount);
    const handleAction = (action:ECounterEventType) => {
     switch(action){
         case ECounterEventType.DECREMENT:
             dispatch(decrement());
             break;
         case ECounterEventType.INCREMENT:
             dispatch(increment());
             break;
         case ECounterEventType.RESET:
             dispatch(reset());
             break;
     }
    }
    return (
        <div className={styles.counterContainer}>
          <h1>Counter: {value}</h1>
          <button onClick={() => handleAction(ECounterEventType.INCREMENT)}>+</button>
          <button  onClick={() => handleAction(ECounterEventType.DECREMENT)}>-</button>
          <button  onClick={() => handleAction(ECounterEventType.RESET)}>Reset</button>
        </div>
    )
}

export default CounterComponent;