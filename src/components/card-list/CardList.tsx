import  Card  from '../card/Card';
import './card-list.styles.css';

 type props = {
email: string,
id: number,
name: string,
}

type monster = {
  monsters : props[]
}


 const CardList = ({monsters} : monster)  => {
    console.log(monsters)
    
    return (
        <div className='card-list'>
    {monsters.map((item : props) => (
      <Card key={item.id} monster={item} />
    ))}
  </div>
    )
  
 };

export default CardList