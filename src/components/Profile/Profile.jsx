import PropTypes from 'prop-types';
import { Avatar, ProfileBox, Tag, UserName, Location, Touching, Personal, TouchingItem } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileBox>
      <Personal>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Personal>

      <Touching>
        <TouchingItem>
          <span>Followers</span>
          <span>{followers}</span>
        </TouchingItem>
        <TouchingItem>
          <span>Views</span>
          <span>{views}</span>
        </TouchingItem>
        <TouchingItem>
          <span>Likes</span>
          <span>{likes}</span>
        </TouchingItem>
      </Touching>
    </ProfileBox>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
