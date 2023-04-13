import { Profile } from './Profile/Profile';
import upcomingUser from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { FriendList } from './FriendsList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

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
      <Statistics title={data.title} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};  
