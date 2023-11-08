import { Amplify } from "aws-amplify";
import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import awsconfig from "./aws-exports";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log("signOut, user", signOut, user);
        return (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        );
      }}
    </Authenticator>
  );
}

export default App;
