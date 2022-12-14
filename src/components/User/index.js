import { Component } from "react";
import styles from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log("User.componentWillUnmount");
  }

  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}

// const User = (props) => <li className={styles.user}>{props.name}</li>;

export default User;
