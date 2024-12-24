import Navbar from "./ui/NavBar";
import currentUser from "./assets/currentUser.svg";

function App() {
  return (
    <>
      <Navbar
        userImage={currentUser}
        onSearch={(query) => {
          console.log("query:", query);
        }}
      />
    </>
  );
}

export default App;
