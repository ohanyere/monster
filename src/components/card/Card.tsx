import { Link } from 'react-router-dom';
import './card.styles.css';

 const Card = ({monster}) => {
    console.log(monster);
    
  return(
    <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2> {monster.name} </h2>
    <p> {monster.email} </p>
  </div>
  )
 };

export default Card