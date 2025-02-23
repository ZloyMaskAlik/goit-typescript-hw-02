import styles from './Profile.module.css'
import followers from '../../assets/people.svg'
import views from '../../assets/view.svg'
import like from '../../assets/like.svg'


export default function Profile({name,tag,location,image,stats}) {
    return ( 
        <div className={styles.profile}>
           <div className={styles.data}>          
            <img className={styles.avatar}
              src={image}
              alt="User avatar"
            />
            <p className={styles.username}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.tag}>{location}</p>
           </div>

           <ul className={styles.list}>
            <li className={styles.item}>          
             <img className={styles.icon} src={followers} alt="followers" width="50"/>
             <span className={styles.stats}>{stats.followers}</span>
            </li>
            <li className={styles.item}>
              <img className={styles.icon} src={views} alt="Views" width="50" height="50" />
              <span className={styles.stats}>{stats.views}</span>
            </li>
            <li className={styles.item}>
              <img className={styles.icon} src={like} alt="Likes" width="50" />
              <span className={styles.stats}>{stats.likes}</span>
            </li>
           </ul>
         </div>
    );
};