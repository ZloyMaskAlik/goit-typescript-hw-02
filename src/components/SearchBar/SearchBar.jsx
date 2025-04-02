import { useState } from 'react';
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

export default function SearchBar ({ onSearch }){
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSearch(searchValue);
    setSearchValue('');
  };
  return (
       <div className={css.search}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button className={css.button} type="submit">
            <span className={css.span}>Search</span>
          </button>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </div>
    );
};