import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 60px 0 40px;
  text-align: ${(props) => (props.flex ? "none" : "center")};

  display: ${(props) => (props.flex ? "flex" : "")};
  justify-content: ${(props) => (props.flex ? "space-between" : "")};

  max-width: ${(props) => props.width};
  margin: 0 auto;

  @media (max-width: 430px) {
    padding-bottom: ${(props)=> props.flex? "30px" : "20px"};
  }
`;

export default StyledHeader