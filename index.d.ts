declare module "react-native-round-flags" {
  import React from "react";

  interface FlagProps {
    code: string;
    style?: any;
  }

  export const Flag: (props: FlagProps) => React.SFC<FlagProps>;
}
