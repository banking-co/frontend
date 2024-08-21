import { ModalsInterface } from "./ModalProvider.interface";
import { Modals } from "models";

import { Bonus } from "../Bonus/Bonus";
import { Currency } from "../Currency/Currency";

export const modals: ModalsInterface = {
  [Modals.Bonus]: {
    element: <Bonus key={Modals.Bonus} />,
  },
  [Modals.Currency]: {
    element: <Currency key={Modals.Currency} />,
  },
};
