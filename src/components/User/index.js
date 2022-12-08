import styles from "./User.module.css";

const User = (props) => <li className={styles.user}>{props.name}</li>;

export default User;
