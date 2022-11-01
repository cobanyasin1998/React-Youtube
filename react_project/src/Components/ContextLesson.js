import { SiteContext, AuthContext } from "./context";

import Home from "./Components/Home";
function App() {
  return (
    <>
      <SiteContext>
        <AuthContext>
          <Home />
        </AuthContext>
      </SiteContext>
    </>
  );
}

export default App;
