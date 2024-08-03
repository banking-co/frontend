import { SettingsProps } from "./Settings.interface";
import { Grid, List } from "uikit";

export const Settings: SettingsProps = () => {
  return (
    <>
      <Grid>
        <List
          items={[
            {
              type: "switch",
              title: "test",
              onChange: () => {
                console.log("ok");
              },
            },
          ]}
        />
      </Grid>
    </>
  );
};
