import React from "react"
import "./style.css"

class Introbox extends React.Component {
  render() {
    return (
      <div>
        <div className="introbox">
          <h1 className="introtext">Our mission is to make a tech
          imprint for a better world.</h1>
          <p className="introtextsmall">Hedy focuses on making successful digitalization journeys
          with forefront technology, high-skilled people and an innovative environment.
          We want sustainable, win-win-win-win business relations where the end-customer,
          the client/partner, Hedy and the world wins on the tech and business solutions
          we are developing.</p>
          <h1 className="introtext">We are in it for the long-run,</h1>
          <h1 className="introtextlast">are you?</h1>
        </div>
      </div>
    )
  }

}

export default Introbox
