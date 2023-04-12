import { Profile } from './Profile/Profile';
import upcomingUser from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

export const App = () => {
  return (
    <div
      style={{
        width: 1200,
        padding: 15,
        margin:'0 auto'
        
      }}
    >
      <Profile
        username={upcomingUser.username}
        tag={upcomingUser.tag}
        location={upcomingUser.location}
        avatar={upcomingUser.avatar}
        followers={upcomingUser.stats.followers}
        views={upcomingUser.stats.views}
        likes={upcomingUser.stats.likes}
      />
      <Statistics title={data.title} stats={data}/>
    </div>
  );
};  
