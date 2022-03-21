import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div className='text-center my-4'>
            <h1>Data Is Loading...</h1>
            <h5>Please Wait Few Second</h5>
        </div>
    }
    else {
        return (
            <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/register",
                    state: { from: location }
                }}
            ></Redirect>
    
            }
        >
    
        </Route>
        );
}
};

export default PrivateRoute;