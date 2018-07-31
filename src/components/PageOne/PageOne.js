import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

PageOne.propTypes = {
    fetchUser: PropTypes.func.isRequired
}

export default connect(null, { fetchUser })(PageOne);
