import type { ChangeEvent,   ComponentProps} from 'react';
import './search-box.styles.css';

 type props = {
    onSearchChange : (event : ChangeEvent<HTMLInputElement>) => void
 } & ComponentProps<"input">
 const SearchBox = ({onSearchChange} : props) => (
  <input
    className='search-box'
    type='search'
    placeholder='search monsters'
    onChange={onSearchChange}
    
  />
);

export default SearchBox