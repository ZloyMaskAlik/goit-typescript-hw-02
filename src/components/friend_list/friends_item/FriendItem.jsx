import styles from './FriendItem.module.css'

export default function FriendItem({ item: { avatar, name, isOnline } }) {
      return (
        <>
            <img src={avatar} alt="Avatar" width="100" />
            <p className={styles.name}>{name}</p>
            <p className={isOnline ? styles.status_isOnline : styles.status_isOffline}>
              {isOnline ? 'Online' : 'Offline'} </p>
        </>
    )
} 