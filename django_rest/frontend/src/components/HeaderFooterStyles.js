import styled from 'styled-components';

export const HeaderBox = styled.header`
  float: left;
  background: #2b2b2b;
  top: 0;
  width: 100%; 
  margin-bottom: 30px;
`;

export const FooterBox = styled.header`
  background: #CCC;
  position:fixed;
  bottom: 0;
  width: 100%; 
`;

export const Container = styled.div`
    float: left;
    display: flex;
    max-width: 200px;
    margin: 0 auto;    
`

export const Heading = styled.p`
  float: left;  
  font-style: italic;
  font-size: 32px;
  color: #f9ed32;
  margin-bottom: 40px;  
  padding: 0 50px 0 50px;
`;

export const Nav = styled.div` 
  float: left; 
  display: flex;
  padding: 50px 50px 0 50px;  
`;

export const Element = styled.li`
  float: left;
  display: flex;
  margin-right: 10px;
  font-family: Verdana, Arial, Helvetica, sans-serif;  
  font-size: 14px;  
`;