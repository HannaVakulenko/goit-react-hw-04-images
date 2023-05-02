import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  height: 44px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  border: 0;

  svg {
    fill: ${props => props.theme.colors.text};
    stroke: ${props => props.theme.colors.accent};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      transform: scale(1.2);
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  background-color: #fff;
  height: 100%;
  transition: 0.5s;
  /* outline: none; */
  &:hover {
    background-color: #d9dae0;
  }
`;
