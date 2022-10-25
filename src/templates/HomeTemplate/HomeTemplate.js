import { Route } from 'react-router';
import { useEffect } from 'react';


export const HomeTemplate = (props) => {
    const { Component, ...restRoute } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <Route {...restRoute} render={(propsRoute) => {

        return <>



            <Component {...propsRoute} />




        </>
    }} />
}