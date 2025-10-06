import './card.styles.css';

type props = {
email: string,
id: number,
name: string,
}

type monsterProps = {
  monster : props
}
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