import React from 'react';
import { Link } from 'react-router-dom'
import '../../CSS/meats.css'

const Meats = ({ props }) => {
  return (
    <div className="row">
    <Link to="/meats" />
      <div className="column">
        <img alt="Tri Tip" src="./TriTip.jpeg"/>
        <img alt="Brisket" src="./Brisket.jpeg"/>
        <img alt="Lollipop Chicken" src="./LollipopChickenLegs.jpeg"/>
      </div>
      <div className="column">
        <img alt="Glazed Smoked Chicken Wings" src="./GlazedSmokedChickenWings.jpeg"/>
        <img alt="Picanha" src="./Picanha.jpeg"/>
        <img alt="Pork Butt" src="./PorkButt.jpeg"/>
      </div>
      <div className="column">
        <img alt="Various Meats" src="./VariousMeats.jpeg"/>
        <img alt="Beef Rib Shorties" src="./BeefRibShorties.jpeg"/>
        <img alt="Smoked Chicken Thighs" src="./SmokedChickenThighs.jpeg"/>
      </div>
      <div className="column">

      </div>
    </div>
  )
}

export default Meats;
