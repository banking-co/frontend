import "./Avatar.sass";

import type { AvatarProps } from "./Avatar.interface";
import { createSignal } from "solid-js";

// const images = new Map<string, string>();

// export const useImage = (src: string): string =>
//   useMemo(() => {
//     if (src === undefined) return src;
//     if (src.length <= 0) return src;
//     const getImage = images.get(src);
//     if (getImage !== undefined) return getImage;
//
//     return src;
//   }, [src]);
//
// export const preloadImage = async (src: string): Promise<boolean> => {
//   try {
//     if (!images.has(src)) {
//       const response = await fetch(src, { mode: "no-cors" });
//
//       if (response.status !== 200) return false;
//       const blob = await response.blob();
//
//       images.set(src, URL.createObjectURL(blob));
//     }
//     return true;
//   } catch {
//     return true;
//   }
// };

export const Avatar: AvatarProps = (props) => {
  const [loadingStatus, setLoadingStatus] = createSignal<
    "loading" | "error" | undefined
  >("loading");
  // const image = useImage(props.src || "");
  //
  // useEffect(() => {
  //   preloadImage(props.src || "").then((r) => console.log(r));
  // }, [props.src]);

  return (
    <div class="Avatar" classList={props.classList} style={props.style}>
      <img
        class="Avatar__image"
        classList={{
          "Avatar__image--error": loadingStatus() === "error",
          "Avatar__image--loading": loadingStatus() === "loading",
        }}
        alt=""
        loading={"eager"}
        src={props.src}
        onError={() => setLoadingStatus("error")}
        onLoad={() => setLoadingStatus(undefined)}
      />
    </div>
  );
};
