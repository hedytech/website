import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"
import Tellmemorebutton from "../tellmemorebutton"
import Kotlin from "../kotlin"




class Bookingconditions extends React.Component {
  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>

      <div className="abouttextthinleftweb" id="backgroundcolorwhiteblack">
          <h1>BOOKING CONDITIONS</h1>
        <div className="whatwedosmalltextcenter">
          <p id="nomarginbottom">Registration</p>
        </div>
          <p id="nomargintop">A confirmation that we have received your notification
          will be emailed as soon as possible, often next working day.
          If you have not received confirmation from us within three days,
          please contact us. All other information about the course will
          be emailed to you four weeks prior to the course starts.</p>
        <div className="whatwedosmalltextcenter">
          <p id="nomarginbottom">Payment</p>
        </div>
          <p id="nomargintop">Shortly after registration, the course will be invoiced. Payment shall be made within 30 days or before the course starts. The course fee includes course material, “fika” and lunch.</p>
        <div className="whatwedosmalltextcenter">
          <p id="nomarginbottom">Booking</p>
        </div>
          <p id="nomargintop">Registration is binding. In case of need, you can transfer your spot to a colleague.
          This need to be done no later than four weeks prior to the course start.
          Any adjustments later than that will be charged with a re-booking fee of 50 % of the course fee.
          In case of sickness, transferral adjustments can be made later without a fee. We do not refund cancellations. </p>

        </div>
        </div>




    )
  }
}

export default Bookingconditions
