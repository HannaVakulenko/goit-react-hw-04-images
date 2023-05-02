import { Component } from 'react';
import { SearchForm, SearchButton, SearchInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onChangeInput = e => {
    const { value } = e.currentTarget;
    const validValue = value.trim().toLowerCase();
    this.setState({ searchValue: validValue });
  };

  onSearchImage = e => {
    e.preventDefault();
    const { searchValue } = this.state;

    if (!searchValue) {
      return toast.error('Enter text for search.');
    }

    this.props.onSubmit(searchValue);

    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <SearchForm onSubmit={this.onSearchImage}>
        <SearchButton type="submit">
          <BsSearch size="16" />
        </SearchButton>
        <SearchInput
          id="input"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={this.onChangeInput}
          placeholder="Search images and photos"
          value={searchValue}
        ></SearchInput>
      </SearchForm>
    );
  }
}
