import styles from './FriendList.module.css'
import FriendItem from './friends_item/FriendItem'

export default function FriendList({ peoples }) {
    return (
        <ul className={styles.list}>
            {peoples.map((friend) => (
                <li className={styles.item} key={friend.id}>
                    <FriendItem item={friend} />
                </li>
            ))}
        </ul>)
}
    
