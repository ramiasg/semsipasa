import React, { Component } from 'react'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import snapchat from '../img/snapchat.png'
import whatsapp from '../img/whatsapp.png'

export default class Soc extends Component {
  render() {
    return (
      <div className="soc fsc container-fluid my-5">
        <div className="soc-cont cur">
          <img className="soc-icon" src={facebook} alt="facebook" />
        </div>

        <div className="soc-cont cur">
          <img className="soc-icon" src={instagram} alt="facebook" />
        </div>

        <div className="soc-cont cur">
          <img className="soc-icon" src={snapchat} alt="facebook" />
        </div>

        <div className="soc-cont cur">
          <img className="soc-icon" src={whatsapp} alt="facebook" />
        </div>

      </div>
    )
  }
}
