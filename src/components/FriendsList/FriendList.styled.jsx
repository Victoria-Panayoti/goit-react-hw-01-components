import styled from 'styled-components';

export const FriendListBox = styled.ul`
  width:400px;
  margin:0 auto;
  padding-top:16px;
  padding-bottom:16px;  
  display: flex;
  flex-direction: column;
  gap: 8px;
  with: 400px;
  border-radius:8px;
  background-color: ${p=>p.theme.colors.dark};
`;
