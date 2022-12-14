import UserFinder from "./components/UserFinder";
import UsersProvider from "./store/UsersProvider";

function App() {
  return (
    <UsersProvider>
      <UserFinder />
    </UsersProvider>
  );
}

export default App;
