import styled from 'styled-components';

export const DivBtnLoadMore = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

export const BtnLoadMore = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 20px;
  background-color: #95999e;
  color: #dee0e0;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-visible,
  :active {
    background-color: #dee0e0;
    color: #95999e;
  }
`;
