import './App.css'

import Header from './header/Header'
import Profile from './profile/Profile'
import FriendList from './friend_list/FriendList'
import TransactionHistory from './transactions_history/TransactionHistory'

import userData from './profile/userData.json'
import friends from './friend_list/friends.json'
import transactions from './transactions_history/transactions.json'


export default function App() {
   return (
    <>
       <Header />
       <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </>
  )
}

