import SwitchTheme from "./SwitchTheme";
import { useAuth } from "../context";
export default function HeaderContext() {
  const { user, setUser } = useAuth();
  const login = () => {
    setUser({
      name: "Yasin",
      lastName: "Çoban",
    });
  };
  const logout = () => {
    setUser(false);
  };
  return (
    <>
      <header>
        
        HEADER <br />
        {(user && <><h3>{user.name}</h3><button onClick={logout}>Çıkış Yap</button></>) || (
          <button onClick={login}>Giriş Yap</button>
        )}
        <hr></hr>
        <SwitchTheme />
      </header>
    </>
  );
}
