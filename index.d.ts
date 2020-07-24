declare module "react-native-round-flags" {
  import React from "react";

  interface FlagProps {
    code: string;
    style?: any;
  }

  const Flag: React.SFC<FlagProps>;

  export default Flag;
}
