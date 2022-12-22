// import React from 'react';
import WorldCup from '../img/WorldCup.png'
import Main from '../img/main.png'

// import Bundesliga from '../img/Bundesliga.png';
// import LaLiga from '../img/LaLiga.png';
// import Ligue1 from '../img/Ligue1.png';
// import PremierLeague from '../img/PremierLeague.png';
// import BackgroundLeft from '../img/background-left.jpeg'
// import SerieA from '../img/SerieA.png';

// Display logo standing that choose user
const LeagueInfo = (props) => {
  return (
    <div className="league-info">
      <h3>Підсумок Чемпіонату Світу 2022</h3>
      <div className='main'>
         <img src={Main} alt='main' /> 
      <div className='bottom-right'>
        <span>Cтадіони ЧС-2022</span>
        </div>
      </div>
      <p>&nbsp;Чемпіонат світу 2022 стартував 20 листопада. Фінал відбувся 18 грудня, таким чином цей розіграш є найкоротшим в історії турніру.
      <br/>
      &nbsp;У фіналі зустрілись збірна Аргентини та Франції. 90 хвилин було недостатньо для команд і основний час закінчився з рахунком 2:2. В другому овертаймі команди забили ще по одному м'ячу (3:3). Аргентина здобула перемогу вже по пенальті (4:2). В цьому неймовірному за своїм сюжетом матчі хет-триком відзначився Кіліан Мбаппе та дублем Ліонель Мессі.</p>
      <h3>Розклад найближчих матчів</h3>
      <div className='logo-league'>
      <img src={WorldCup} alt='wc'></img>
      </div>
    </div>
  )
}

export default LeagueInfo;
//     let imgSrc;
//     switch (props.leagueCaption) {

//         case "Bundesliga":
//             imgSrc = Bundesliga;
//             break;

//         case "Primera Division":
//             imgSrc = LaLiga;
//             break;

//         case "Ligue 1":
//             imgSrc = Ligue1;
//             break;

//         case "Premier League":
//             imgSrc = PremierLeague;
//             break;

//         case "Serie A":
//             imgSrc = SerieA;
//             break;
        
//         case "World CUP":
//             imgSrc = WorldCup;
//             break;
            
//         default:
//             imgSrc = WorldCup;
//             break;
//     }

//     return (
//         <div className="league-info">
//             <img src={imgSrc} alt="" />
//         </div>
//     );
// };