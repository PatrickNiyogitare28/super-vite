<h1 style="text-align: center">Super Vite ⚡</h1>
 A vite react typescript boilerplate with pre-configured <code>sass</code>, <code>redux-tool-kit</code>, <code>tailwind</code>, <code>esLint</code> <code>Prettier</code>, <code>i18n internationalization</code> &amp; <code>Dockerfile</code>... built in cli coming soon ⚒️
 
 
 This to get you ready with react vite develpment with zero configurations
 
 
<br>
<br>

![Builds Workflows](https://github.com/patrickniyogitare28/super-vite/actions/workflows/superlinter.yml/badge.svg)

## Documentation

Click to access [The super vite documentation](https://doc-super-vite.vercel.app/)

## Live demo

Click to view [The super vite live demo](https://super-vite.vercel.app/)

## Getting started
Click `Use this template` to create the your own repo from the template

Before you can start developing your awesome application you need to install the project's dependencies. Make sure you have Node (>= 10.13.0)


### Development

Once all dependencies have been installed you can start development. To start a development server on [http://localhost:3000](http://localhost:3000) run:

```sh
$ npm run dev
```
or
```sh
$ yarn dev
```

### Production

To run your application in production make sure to run a build first:

```sh
$ npm run build
```
or
```sh
$ yarn build
```

And then start you application with a provided port number (defaults to 3000 if not provided):

```sh
$ PORT=8080 npm run start
```


This will render static HTML pages into `./out`

### Linters

The boilerplate provides a couple of linters to help you keep an eye on code consistency and type safety. There are three linters: one for CSS, one for TypeScript and one for type safety. You can use each of them separately using the following commands:

```sh
$ npm run lint:css
$ npm run lint:ts
$ npm run lint:types
```

TIP: To get the most out of your linters install the corresponding (Stylelint, TSLint) plugins for your editor or IDE

**Prettier**

Prettier helps you to enforce consistent (opinionated) code style. If possible, you can tell your editor to format you code when you save a file. If you are not able to do this, you can run prettier manually using:

```sh
$ npm run prettier
```

### Tests

You can write your tests using Jest and Enzyme. You can run all test with the following command

```sh
$ npm run test
```
> To write your unite tests, add a test file under `src/__tests__`


## Routing
Routes are defined under `src/config/routes`
```js
   {
        path: '/',
        name: 'Counter Page',
        component: Counter,
        exact: true,
    },
```
That object should be added in `routes` array, and that's all to be able to route.

## Modules

### TypeScript

Vite provides custom module resolvers.
This means you can use absolute imports with custom namespaces by default for the following modules:

You can define a new alias resolver in `vite.config.json` & `config-overrides.js`

For the jest to be able to recogonize the alias import, you should also define it under `jest.config.json`

```js
/* import common library */
import lib from '@common/<folder>/<lib>'
/* import component */
import Counter from '@components/counter'
/* import views/pages */
import CounterView from '@views/counter'
/* import interface */
import ICounterAction from '@interfaces/ICounterActionCounter'
/* import enum */
import ECounterEventType from '@enums/ECounterEventType'
/* import layout */
import DashboardLayout from '@layouts/DashboardLayout'
/* import assets */
import GithubIcon from '@assets/icons/github.png'
/* import enum */
import ECounterEventType from '@interfaces/ECounterEventType'


```

### SCSS

The boiler plate supports scss and css module
```js
/*.tsx*/
import { classNames } from 'classnames-generics'
import styles from './styles.module.scss'

return (
    <div className={styles.appContainer}>
      <p className={classNames(styles.wrapper)}>Scss styling</p>
    </div>
)
```
```css
/*.scss*/
  .appContainer{
      width: 100%;
      .wrapper{
          background: #ffe1ee;
      }
  }
```

### Tailwind
```js
/*.tsx*/
...
return (
    <div className="mt-2">
      <p className="w-100">Scss styling</p>
    </div>
)
```

### Redux dev tool
The boiler plate has a configured global state management with redux dev tool.

### Getting started with states
- Define a state slice under `src/redux-slices` refer to `src/redux-slice/counter.slice.ts`

- Import the slice under `src/store` and declare your reducer

- To consume the state refer to `src/components/counter`

```js
import React from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
    selectCount,
    decrement,
    increment,
    reset,
} from '@redux-slices/counter.slice'
import { ECounterEventType } from '@enums/ECounterEventType'
import styles from './styles.module.scss'

const CounterComponent = () => {
    const dispatch: any = useAppDispatch()
    const value: number = useAppSelector(selectCount)
    const handleAction = (action: ECounterEventType) => {
        switch (action) {
            case ECounterEventType.DECREMENT:
                dispatch(decrement())
                break
            case ECounterEventType.INCREMENT:
                dispatch(increment())
                break
            case ECounterEventType.RESET:
                dispatch(reset())
                break
        }
    }
    return (
        <div className={styles.counterContainer}>
            <div className={styles.counterWrapper}>
                <h2>
                    Counter: <label>{value}</label>
                </h2>
                <div className={styles.btnsWrapper}>
                    <button
                        onClick={() =>
                            handleAction(ECounterEventType.INCREMENT)
                        }
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            handleAction(ECounterEventType.DECREMENT)
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() => handleAction(ECounterEventType.RESET)}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CounterComponent
```

### Todo
 The boiler plate incomming version will container a build in CLI to auto generate `components` and `views` plus connecting them to `store`

### LICENSE
[MIT LICENSED](https://github.com/PatrickNiyogitare28/super-vite/blob/master/LICENSE)
#### Maintainers
- patrickniyogitare28@gmail.com

