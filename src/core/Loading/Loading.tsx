import { onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Placeholder, Spinner } from "uikit";

export const Loading = () => {
  const navigate = useNavigate();

  onMount(() => {
    // setTimeout(() => {
    //   navigate("/profile", {
    //     replace: true,
    //     state: {
    //       token: "12321312321312321312",
    //     },
    //   });
    // }, 3000);
  });

  return (
    <Placeholder isCenter>
      <Spinner />
    </Placeholder>
  );
};
