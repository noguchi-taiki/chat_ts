import Icon from "./icon";
import styles from './header.module.css';

interface HeaderProps {
    headerTitle:"Chat" | "Event" | "Album" | "Location";
}

const Header = ({headerTitle}:HeaderProps) => {
    return<>
    <header>
        <div className={styles.header_title}>
            <Icon link="/" icon="/home.png"/>
            <h1>{headerTitle}</h1>
            <Icon link="/setting" icon="/setting.png"/>
        </div>
        <div className={styles.header_icons}>
            <div className={styles.icon}>
                <Icon link="/" icon="/chat.png"/>
                <p>Chat</p>
            </div>
            <div className={styles.icon}>
                <Icon link="/event" icon="/event.png"/>
                <p>Event</p>
            </div>
            <div className={styles.icon}>
                <Icon link="/album" icon="/album.png"/>
                <p>Album</p>
            </div>
            <div className={styles.icon}>
                <Icon link="/location" icon="/location.png"/>
                <p>Location</p>
            </div>
        </div>
    </header>
    </>
}

export default Header;