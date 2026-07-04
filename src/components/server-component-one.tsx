import fs from "fs";

//import { ServerComponentTwo } from "./server-component-two";

import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf8");

  return (
    <>
      <h1>Server Component One</h1>

      {/*<ClientComponentOne />*/}

      {/*<ServerComponentTwo />*/}
    </>
  );
};
