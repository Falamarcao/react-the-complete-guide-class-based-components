import { Fragment, /*useState, useEffect,*/ Component } from "react";
import styles from "./UserFinder.module.css";

import Users from "../Users";
import UsersContext from "../../store/users-context";

class UserFinder extends Component {
  // On functional components we could use [useContext]
  // so on class-based components, we can't use more than one context.
  static contextType = UsersContext;

  //   constructor() {
  //     super();
  //     this.state = {
  //       filteredUsers: [],
  //       searchTerm: "",
  //     };
  //   }

  state = {
    filteredUsers: [],
    searchTerm: "",
  };

  // On functional components,
  // we can compare with the use of [useEffect] with no dependencies
  // or maybe a variable that was created/initialized once the component starts.
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  // On functional components,
  // we can compare with the use of[useEffect] with a dependency array filled.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>

        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) =>
//         user.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={styles.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>

//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
