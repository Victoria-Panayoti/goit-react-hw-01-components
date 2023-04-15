import styled from 'styled-components';

export const FriendListItemBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.light};
  width: 368px;
  margin: 0px auto;
  padding: 16px;
  border-radius: 8px;
  gap: 24px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 12px -2px;
`;
export const Name = styled.p`
  padding: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.16;
`;
export const IsOnline=styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${p => {
    return p.isOnline ? p.theme.colors.online : p.theme.colors.offline;
    }};
`