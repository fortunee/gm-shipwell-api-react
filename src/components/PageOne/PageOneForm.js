import React, { Component } from 'react'

class PageOneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: '',
            from: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const field = e.target.name;
        const value = e.target.value;

        this.setState({ field: value });
    }

    render() {
        return (
            <div className="page-form">
                <form>
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
