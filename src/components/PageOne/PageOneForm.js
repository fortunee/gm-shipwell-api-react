import React, { Component } from 'react'

class PageOneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: '',
            from: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const field = e.target.name;
        const value = e.target.value;

        this.setState({ [field]: value });
    }

    onSubmit(e) {
        e.preventDefault();
        const { to, from } = this.state;
        const addresses = { to, from }
        const URL = 'https://dev-api.shipwell.com/v2/locations/addresses/validate';

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addresses)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    render() {
        return (
            <div className="page-form">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>To: </label>
                        <input type="text" name="to" onChange={this.onChange} value={this.state.to}/>
                    </div>
                    <div>
                        <label>From: </label>
                        <input type="text" name="from" onChange={this.onChange} value={this.state.from}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PageOneForm
