import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from '../context/auth'

function AuthRoute({
    component: Component, //just a alias
    ...rest
}) {
    //we look if the user is logged in
    const { user } = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={props =>
                user ? <Redirect to='/' /> : <Component {...props} />
            }
        />
    )
}

export default AuthRoute