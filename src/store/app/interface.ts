import { Views, Panels, Modals } from "store/models";

export interface AppState {
  activeView: Views;
  activePanel: Panels;
  activeModal: Modals | null;
  offline: boolean;
  theme: "light" | "dark" | null;
}
