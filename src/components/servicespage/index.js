import React from "react"
import { TweenLite, Linear } from "gsap"
import "./style.css"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"

class Servicespage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.updateLine();
  }
  //updateLine();
  updateLine = () => {
      let data = this.generatePoints();
      let color = '#F1888A'
      TweenLite.ticker.fps(10);
      TweenLite.to(['.line', '.line-glow'], 1.5, {
          attr: {'points': data, 'stroke': color },
          ease: Linear.easeNone,
          onComplete: this.updateLine
      });
  }

  generatePoints = () => {
      let freq = Math.random()*0.03,
          svgSize = {w: 800, h: 300},
          amplitude = Math.random() * 0.25 * svgSize.h,
          segments = [];

      let p = { x: 0, y: 0 };
      for (let i = 0; i < svgSize.w; i++) {
          p.x = i;
          p.y = amplitude * Math.sin(p.x * freq) + svgSize.h / 2;
          segments.push(p.x + ',' + p.y);
      }
      return segments.join(' ');
  }

  render() {
    return (
      <div className="fadeinclass">
      <ScrollToTopOnMount/>



      <div className="mobile">
        <div className="pagemargin">
        <div className="whatwedoheadertext">
          <h1>SERVICES</h1>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Consultancy services within programming and management</p>
        </div>
        <div className="abouttextthinleft">
          <p>With forefront technology skills and strategic minds
          Hedy supports small, mid-sized and large companies in
          their aspiration to make a successful digitalization
          journey and build a profitable business.</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>ROLES WE HAVE TAKEN</h1>
        </div>
        <div className="roleswehavetakentext">
          <p>Quality Assurance, <mark className="pink">Tech architect, Agile coach,</mark> Tech educator, Brand developer,
          <mark className="pink">Growth hacker,</mark> Backend developer,
          Kotlin developer, <mark className="pink">Board member,</mark>
          Java developer, Business advisor,
          <mark className="pink">Android developer,</mark>  Graphical designer,
          Tech lead, Investment manager, <mark className="pink">Frontend developer,</mark>
          UX/UI developer, <mark className="pink">CEO,</mark>  Digital strategist,
          Managing Director,<mark className="pink"> Product owner,</mark> <mark className="pink">Project lead,</mark>
          Concept developer, Sales leader <mark className="pink">and many more.</mark></p>
        </div>
        <div className="whatwedoheadertext">
          <h1>WHAT WE DO</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Accelerate businesses with skills and solutions
          for a profitable digitalization journey</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>TYPE OF SERVICES</h1>
        </div>
        <div className="abouttextthinleft">
          <ul>
            <li>Inhouse projects delivered by a Hedy team</li>
            <li>Consultancy service at client, where Hedy talent
            leads the work or is part of a team</li>
            <li>Take the role as tech and/or business partner</li>
          </ul>
        </div>
        <div className="whatwedoheadertext">
          <h1>TYPE OF CLIENT</h1>
        </div>
        <div className="abouttextthinleft">
          <ul>
            <li>Wants to take their product or business to “the next level”</li>
            <li>Has digitalization on the agenda</li>
            <li>Needs support with specific competencies to develop its product</li>
            <li>Wants a long-term tech partner to complement its development team</li>
            <li>Is facing globalization, expansion or other change management challenges</li>
          </ul>
        </div>
        <div className="whatwedoheadertext">
          <h1>PRICE MODEL</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Depends on the assignments length, scope and need.
          We have booth fixed pricing and hourly rate</p>
        </div>
        </div>
      </div>



      <div className="web">

        <div id="services3">
        <div id="opacity">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
          <defs>
            <filter id="glow-filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
          </defs>
          <polyline className="line"></polyline>
          <polyline className="line-glow"></polyline>
        </svg>

        <div className="areasheader">





          <div className="onheaderbox">

          <p className="hedytexttiltservices">Hedy</p>


            <div id="arcamajora">
              <h1 id="nomargin">SERVICES</h1>
            </div>
            <div id="futuramediumitalic">
              <h6 id="nomargin">Consultancy services within programming and management</h6>
            </div>
          </div>
        </div>



        <div className="justifykotlinlargediv">



          <div className="justifyrightservices">
            <div className="textboxservices2" id="backgroundcolorwhiteblack">
            <h2 id="nomargin">We accelerate businesses with skills and solutions
                              for a profitable digitalization journey.</h2>
                              <h5>With forefront technology skills and strategic minds
                              Hedy supports small, mid-sized and large companies in
                              their aspiration to make a successful digitalization
                              journey and build a profitable business.</h5>
            </div>
          </div>

          <div className="justifyrightkotlin">

          <div className="textboxservices" id="backgroundcolorpinkblack">
            <h3 className="textboxheader" id="nomargintop">ROLES WE HAVE TAKEN</h3>
              <div className="justifytext">
              <h6 id="nomargin">Quality Assurance, Tech architect, Agile coach, Tech educator, Brand developer,
              Growth hacker,Backend developer,
              Kotlin developer, Board member,
              Java developer, Business advisor,
              Android developer, Graphical designer,
              Tech lead, Investment manager, Frontend developer,
              UX/UI developer, CEO, Digital strategist,
              Managing Director, Product owner,Project lead,
              Concept developer, Sales leader and many more.</h6>
              </div>
          </div>

            <div className="textboxservices">
              <h4 className="textboxheader" id="nomargin">TYPE OF SERVICES</h4>
              <div className="justifytext">
                <div className="bulletpoints">
                <ul>
                  <li>Inhouse projects delivered by a Hedy team</li>
                  <li>Consultancy service at client, where Hedy talent leads the work or is part of a team</li>
                  <li>Take the role as tech and/or business partner</li>
                </ul>
                </div>
              </div>
            </div>



        </div>

</div>
      </div>
    </div>
        <Contactbutton/>
      </div>
    </div>
    )
  }
}

export default Servicespage
