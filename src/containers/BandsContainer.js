import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux'


//this component should act as your connection to the redux store and should be 
//a child of the App component --SEE APP.JS
class BandsContainer extends Component {
  render() {
    return (
      <div>
        {/* write the BandInput component as a child of BandsContainer */}
        {/* //passed down as the prop addBand to BandInput */}
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}


//any values we want to use from Redux as well as any actions we want to dispatch
//should be set up and available in BandsContainer so they can be passed down to 
//other components 
const mapStateToProps = ({ bands }) => ({ bands })


//the dispatched action required to initiate this update should be set up in BandsContainer and
//passed down as the prop addBand to BandInput
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
