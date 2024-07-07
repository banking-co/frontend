import { Grid, List, Position } from "uikit";
import { Icon2fa } from "@tabler/icons-react";

export const Menu = () => {
  return (
    <Position type="column" gap={24}>
      <Grid title="Развлечения" description="Осторожно, можно все и проиграть!">
        <List
          items={[
            {
              icon: <Icon2fa />,
              title: "Test",
              to: "/",
              disablePropagation: true,
            },
            {
              icon: <Icon2fa />,
              title: "Test",
              to: "/",
              disablePropagation: true,
            },
            {
              icon: <Icon2fa />,
              title: "Test",
              to: "/",
              disablePropagation: true,
            },
          ]}
        />
      </Grid>
      <Grid title="Развлечения" description="Осторожно, можно все и проиграть!">
        <List
          items={[
            {
              icon: <Icon2fa />,
              title: "Test",
              to: "/",
            },
            {
              icon: <Icon2fa />,
              title: "Test",
              to: "/",
            },
            {
              icon: <Icon2fa />,
              title: "Test",
              to: "/",
              disablePropagation: true,
            },
          ]}
        />
      </Grid>
    </Position>
  );
};
