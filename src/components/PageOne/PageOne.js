import React, { Component } from 'react'

class PageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                user: {},
                company: {}
            }
        }
    }
    componentWillMount() {
        const URL = 'https://dev-api.shipwell.com/v2/auth/me';
        const token = 'Token 4c4547fe6ad68c57cbac0a8cfbfec35b';
        const headers = {
            Authorization: token 
        }
        fetch(URL, { headers })
            .then(res => res.json())
            .then(data => this.setState({ data }));
    }

    render() {
        // const { user = {} } = this.state.data;
        const { user } = this.state.data;

        return (
            <div>
                <h1>PageOne</h1>
                <h2>First name: {user.first_name}</h2>
            </div>
        )
    }
}

export default PageOne;
