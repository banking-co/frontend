import { View } from "uikit";

import { Main } from "./Main/Main";

import { Panels } from "store/models";

export const Events = () => {
  return (
    <View activePanel={Panels.Default}>
      <Main data-panel={Panels.Default} />
    </View>
  );
};
