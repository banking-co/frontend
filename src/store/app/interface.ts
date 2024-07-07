import { Modals } from "store/models";

export interface AppState {
  activeModal: Modals | null;
  offline: boolean;
  theme: "light" | "dark" | null;
}
