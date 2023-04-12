import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from '../FriendsList/FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>{
            friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            ))
        }
  
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    })).isRequired,
}