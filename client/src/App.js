import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import City from "./components/City";
import Profile from "./components/Profile";
import ProfileDetail from "./components/ProfileDetail";
import Store from "./components/Store";
import Mountain from "./components/Mountain";
import StoreDetail from "./components/StoreDetail";
import axios from "axios";

function App() {
  const [cities, setCities] = useState([]);
  const [storeDetails, setStoreDetails] = useState([]);
  const [profile, setProfile] = useState([]);
  const [store, setStore] = useState([]);
  const [home, setHome] = useState([]);

  const getHome = async () => {
    const response = await axios.get("/api/users");
    setHome(response.data.users);
  };

  const getStore = async () => {
    const response = await axios.get("/api/skistores");
    setStore(response.data.skistores);
  };

  const getCities = async () => {
    const response = await axios.get("/api/cities");
    setCities(response.data.cities);
  };

  useEffect(() => {
    getHome();
    getStore();
    getCities();
  }, []);

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} home={home} />}
        />
        <Route
          exact
          path="/profile"
          component={(props) => (
            <Profile
              {...props}
              profile={profile}
              home={home}
              getHome={getHome}
            />
          )}
        />
        <Route
          exact
          path="/profiledetail/:id"
          component={(props) => <ProfileDetail {...props} />}
        />
        <Route
          exact
          path="/city"
          component={(props) => <City {...props} cities={cities} />}
        />
        <Route
          exact
          path="/store"
          component={(props) => <Store {...props} store={store} />}
        />

        <Route
          exact
          path="/mountain/:id"
          component={(props) => <Mountain {...props} />}
        />
        <Route
          exact
          path="/storeDetail/:id"
          component={(props) => (
            <StoreDetail {...props} storeDetails={storeDetails} />
          )}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
