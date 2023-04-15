import { Profile } from './Profile/Profile';
import upcomingUser from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { FriendList } from './FriendsList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={upcomingUser.username}
        tag={upcomingUser.tag}
        location={upcomingUser.location}
        avatar={upcomingUser.avatar}
        followers={upcomingUser.stats.followers}
        views={upcomingUser.stats.views}
        likes={upcomingUser.stats.likes}
      />
      <Statistics title='Upload stats' stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
}; 
