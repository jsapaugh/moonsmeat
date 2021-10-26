import React from 'react';
import { Link } from 'react-router-dom'
import '../../CSS/meats.css'

const Meats = ({ props }) => {
  return (
    <div className="row">
    <Link to="/meats" />
      <div className="column">
        <img alt="Tri Tip" src={process.env.PUBLIC_URL + "/TriTip.jpeg"}/>
        <img alt="Brisket" src={process.env.PUBLIC_URL + "/Brisket.jpeg"}/>
        <img alt="Lollipop Chicken" src={process.env.PUBLIC_URL + "/LollipopChickenLegs.jpeg"}/>
      </div>
      <div className="column">
        <img alt="Glazed Smoked Chicken Wings" src={process.env.PUBLIC_URL + "/GlazedSmokedChickenWings.jpeg"}/>
        <img alt="Picanha" src={process.env.PUBLIC_URL + "/Picanha.jpeg"}/>
        <img alt="Pork Butt" src={process.env.PUBLIC_URL + "/PorkButt.jpeg"}/>
      </div>
      <div className="column">
        <img alt="Various Meats" src={process.env.PUBLIC_URL + "/VariousMeats.jpeg"}/>
        <img alt="Beef Rib Shorties" src={process.env.PUBLIC_URL + "/BeefRibShorties.jpeg"}/>
        <img alt="Smoked Chicken Thighs" src={process.env.PUBLIC_URL + "/SmokedChickenThighs.jpeg"}/>
      </div>
      <div className="column">

      </div>
    </div>
  )
}

export default Meats;
