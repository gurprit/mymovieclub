import React from "react";
import CreateList from "../components/CreateList";
import Lists from "../components/Lists";
import Layout from "../components/shared/Layout";
import { UserContext } from '../index'

function HomePage() {
  const user = React.useContext(UserContext);

  return (
    <Layout>
      <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest text-center">
        WELCOME, {user.displayName.toUpperCase()}!
      </h1>
      <Lists user={user} />
      <CreateList user={user} />
    </Layout>
  );
}

export default HomePage;
