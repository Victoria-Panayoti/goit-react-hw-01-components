import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendsList/FriendListItem/FriendListItem';
import { FriendListBox } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendListBox>{
            friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            ))
        }
  
        </FriendListBox>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    })).isRequired,
}