import { SectionStyled } from './Section.styled';
// import { Header } from 'components/Header/Header';
import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
};
