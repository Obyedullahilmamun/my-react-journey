import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'


class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
        //  could be false
      }
    }

  render() {

    const {isLoggedIn} = this.state
    

    return( 
        <div>
            {isLoggedIn ? <HomePage /> : <LogInPage />}
            {/* {isLoggedIn && <HomePage />} */}
        </div>

    )
  }
}

export default CONDITIONAL_RENDERING