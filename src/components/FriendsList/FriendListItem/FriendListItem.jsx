import PropTypes from 'prop-types';
import { FriendListItemBox, IsOnline, Name } from './FriendListItem.styled';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendListItemBox>
      <IsOnline isOnline={isOnline}>{isOnline}</IsOnline>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendListItemBox>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
}