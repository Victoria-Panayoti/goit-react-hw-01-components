import styled from 'styled-components';

export const ProfileBox = styled.div`
  background-color:${props=>props.theme.colors.light};
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 12px -2px;
`;
export const Personal = styled.div`
  margin-top: 24px;
`;
export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 8px -2px;
  margine-bottom: 40px;
`;
export const UserName = styled.p`
  padding: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.16;
  text-transform: uppercase;
  margin-bottom: 8px;
`;
export const Tag = styled.p`
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const Location = styled.p`
  padding: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  text-transform: uppercase;
  margin-bottom: 8px;
`;
export const Touching = styled.ul`
  width: 100%;
  padding:12px;
  display: flex;
  gap: 12px;
  justify-content: space-around;
  background-color:${props => props.theme.colors.dark};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

`;
export const TouchingItem = styled.li`
    display:flex;
    flex-direction:column;
    gap: 12px;
`