import React, { Component } from 'react'

class PageOne extends Component {
    componentWillMount() {
        const URL = 'https://dev-api.shipwell.com/v2/auth/me';
        const token = 'Token 4c4547fe6ad68c57cbac0a8cfbfec35b';
        const headers = {
            Authorization: token 
        }
        fetch(URL, { headers })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render() {
        return (
        <div>
            <h1>PageOne</h1> 
        </div>
        )
    }
}

export default PageOne;
