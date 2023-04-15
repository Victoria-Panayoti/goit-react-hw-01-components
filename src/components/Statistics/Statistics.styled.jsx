import styled from 'styled-components';

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;


export const StatisticsBox = styled.section`
  background-color: ${props => props.theme.colors.light};
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 12px -2px;
`;
export const StatisticTitle = styled.h2`
  padding: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  width: 100%;
  display: flex;
`;
export const StatItem = styled.li`
width: calc(100%/4);
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: white; 
  background-color:  ${({ color }) => {
  return getRandomHexColor(color);
  }};
`;
