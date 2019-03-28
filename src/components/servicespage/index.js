import React from "react"
import { TweenLite, Linear } from "gsap"
import "./style.css"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"

class Servicespage extends React.Component {

  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>
        <div className="mobile">

        <div id="services">
        <div id="opacitydark">

        <div className="areasheader">
        <div className="headertextbox">
        <p className="hedytexttiltacademy">Hedy</p>

            <h1 id="arcamajora">SERVICES</h1>
          <div className="headertextsmall2">
            <h4>Consultancy services within programming and management</h4>
          </div>
        </div>
        </div>

      <div className="justifycenter">

        <div className="academyteambox" id="backgroundcolordarkbluewhite">
            <div className="academytextthin" id="">
              <div id="">
                <h4 id="">
                We accelerate businesses with skills and solutions
                for a profitable digitalization journey. With forefront technology skills and strategic minds
                Hedy supports small, mid-sized and large companies in
                their aspiration to make a successful digitalization
                journey and build a profitable business.</h4>
              </div>
            </div>
          </div>

            <div className="academyteambox" id="backgroundcolordarkbluepink">

              <div className="academytextthin2" id="colorwhite">
                <h4 className="textboxheader" id="nomargintoplittlebottom">ROLES WE HAVE TAKEN</h4>
                <h4 id="">
                  Quality Assurance, Tech architect,
                  Agile coach, Tech educator, Brand developer,
                  Growth hacker,Backend developer,
                  Kotlin developer, Board member,
                  Java developer, Business advisor,
                  Android developer, Graphical designer,
                  Tech lead, Investment manager, Frontend developer,
                  UX/UI developer, CEO, Digital strategist,
                  Managing Director, Product owner,Project lead,
                  Concept developer, Sales leader and many more.
                </h4>
            </div>


            <div className="academytextthin2" id="colorwhite">
              <h4 className="textboxheader" id="">TYPE OF SERVICES</h4>
            <div id="marginbottom">
              <h4 className="">
              <ul>
                <li>Inhouse projects delivered by a Hedy team</li>
                <li>Consultancy service at client, where Hedy talent leads the work or is part of a team</li>
                <li>Take the role as tech and/or business partner</li>
              </ul>
              </h4>
            </div>
            </div>




      </div>
      </div>
      <Contactbutton/>

      </div>
        </div>
          </div>




      <div className="web">
      <div>


      <div id="services">
      <div id="opacitydark">


        <div className="areasheader">
        <div className="pagemarginweb">

        <div className="headertextbox" id="colorwhite">
        <p className="hedytexttiltacademy">Hedy</p>

          <h1 id="arcamajora">SERVICES</h1>
        <div className="headertextsmall2">
        <p>Consultancy services within programming and management</p>
        </div>
        </div>


        <div className="justifycenter">

        <div className="academyteambox" id="backgroundcolordarkbluepink">
            <div className="academytextthin" id="colorwhite">
            <div id="paddingleftright">
              <h5 id="">
              We accelerate businesses with skills and solutions
              for a profitable digitalization journey. With forefront technology skills and strategic minds
              Hedy supports small, mid-sized and large companies in
              their aspiration to make a successful digitalization
              journey and build a profitable business.</h5>
            </div>
            </div>

          </div>

          <div className="academyteambox" id="backgroundcolordarkbluewhite">

          <div className="academytextthin2" id="paddingbottom">
            <h6 className="textboxheader" id="nomargintoplittlebottom">ROLES WE HAVE TAKEN</h6>
            <h6 id="nomargin"> Quality Assurance, Tech architect,
            Agile coach, Tech educator, Brand developer,
            Growth hacker,Backend developer,
            Kotlin developer, Board member,
            Java developer, Business advisor,
            Android developer, Graphical designer,
            Tech lead, Investment manager, Frontend developer,
            UX/UI developer, CEO, Digital strategist,
            Managing Director, Product owner,Project lead,
            Concept developer, Sales leader and many more.
            </h6>
        </div>


        <div className="academytextthin2" id="paddingbottom">
          <h6 className="textboxheader" id="nomargintoplittlebottom">TYPE OF SERVICES</h6>
        <div>
        <h6 className="bulletpoints" id="nomargintop">
        <ul>
          <li>Inhouse projects delivered by a Hedy team</li>
          <li>Consultancy service at client, where Hedy talent leads the work or is part of a team</li>
          <li>Take the role as tech and/or business partner</li>
        </ul>
      </h6>
      </div>
      </div>

      </div>


        </div>


      </div>
      </div>


      <Contactbutton/>
      </div>

      </div>

    </div>
      </div>
    </div>
    )
  }
}

export default Servicespage
