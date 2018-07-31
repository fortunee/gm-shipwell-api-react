import React, { Component } from 'react'
import { connect } from 'react-redux';
import PageOneForm from './PageOneForm';
import { fetchUser } from './../../actions/user.actions';

class PageOne extends Component {
    componentWillMount() {
        this.props.fetchUser();
    }

    render() {

        return <PageOneForm />
    }
}

export default connect(null, { fetchUser })(PageOne);
