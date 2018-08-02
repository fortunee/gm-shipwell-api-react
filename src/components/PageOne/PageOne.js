import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageOneForm from './PageOneForm';
import { fetchUser } from './../../actions/user.actions';
import { addToAddress, addFromAddress } from './../../actions/address.actions';

class PageOne extends Component {
    componentWillMount() {
        this.props.fetchUser();
    }

    render() {

        return (
            <PageOneForm
                addToAddress={this.props.addToAddress}
                addFromAddress={this.props.addFromAddress}
            />
        )
    }
}

PageOne.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    addToAddress: PropTypes.func.isRequired,
    addFromAddress: PropTypes.func.isRequired
}

export default connect(null, { fetchUser, addToAddress, addFromAddress })(PageOne);
