import { ModalsInterface } from "./ModalProvider.interface";
import { Modals } from "models";

import { Bonus } from "../Bonus/Bonus";
import { Currency } from "../Currency/Currency";
import { RenameBusiness } from "../RenameBusiness/RenameBusiness";
import { UserProfile } from "../UserProfile/UserProfile";
import { BusinessRating } from "../BusinessRating/BusinessRating";

export const modals: ModalsInterface = {
  [Modals.Bonus]: {
    element: <Bonus key={Modals.Bonus} />,
  },
  [Modals.Currency]: {
    element: <Currency key={Modals.Currency} />,
  },
  [Modals.RenameBank]: {
    element: <RenameBusiness key={Modals.Currency} />,
  },
  [Modals.UserProfile]: {
    element: <UserProfile key={Modals.UserProfile} />,
  },
  [Modals.BankRating]: {
    element: <BusinessRating key={Modals.BankRating} />,
  },
};
