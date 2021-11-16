import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    RouteChildrenProps,
} from 'react-router-dom'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import styles from './App.module.scss'
import { classNamesFunc } from 'classnames-generics'

const classNames = classNamesFunc<keyof typeof styles>()
type Props = {
    active: boolean
}

const Application: React.FunctionComponent<{}> = () => {
    return (
        <Provider store={store}>
            <div className={classNames(styles.appContainer)}>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(
                                        props: RouteChildrenProps<any>
                                    ) => (
                                        <route.component
                                            name={route.name}
                                            {...props}
                                            {...route.props}
                                        />
                                    )}
                                />
                            )
                        })}
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    )
}

export default Application
