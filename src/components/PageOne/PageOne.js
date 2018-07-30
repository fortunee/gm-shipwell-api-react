import React, { Component } from 'react'
import PageOneForm from './PageOneForm';

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

        return <PageOneForm />
    }
}

export default PageOne;
