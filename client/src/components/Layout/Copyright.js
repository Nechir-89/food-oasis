import React from "react";
import Link from "@material-ui/core/Link";

const Copyright = () => (
  <div>
    {`Copyright ©${new Date().getFullYear()} -`}
    <Link color="inherit" href="https://hackforla.org/">
      Hack for LA
    </Link>
  </div>
);

export default Copyright;
