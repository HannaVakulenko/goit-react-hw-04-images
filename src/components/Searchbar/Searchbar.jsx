import { useState } from 'react';
import { SearchForm, SearchButton, SearchInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeInput = e => {
    const { value } = e.currentTarget;
    const validValue = value.trim().toLowerCase();
    setSearchValue(validValue);
  };

  const onSearchImage = e => {
    e.preventDefault();

    if (!searchValue) {
      return toast.error('Enter text for search.');
    }

    onSubmit(searchValue);

    setSearchValue('');
  };

  return (
    <SearchForm onSubmit={onSearchImage}>
      <SearchButton type="submit">
        <BsSearch size="16" />
      </SearchButton>
      <SearchInput
        id="input"
        type="text"
        autoComplete="off"
        autoFocus
        onChange={onChangeInput}
        placeholder="Search images and photos"
        value={searchValue}
      ></SearchInput>
    </SearchForm>
  );
};

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
