import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyMapComponent from './PageTwoMap.jsx';


class PageTwo extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('This is props', props);
    
  //   this.state = {
  //       data: {
  //           user: props.user.user || {},
  //           company: props.user.company || {}
  //       }
  //   }
  // }

  // componentWillMount() {
    
  // }

  render() {
    const { user = {} } = this.props.user;
    return (
      <div>
        <h1>Map</h1>
        <h2>Name: {user.first_name} {user.last_name}</h2>
        <MyMapComponent />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(PageTwo);
