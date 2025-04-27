import { useState } from 'react';
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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