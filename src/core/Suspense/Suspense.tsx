import { SuspenseProps, Suspense as S } from "react";

const SuspenseFallback = () => {
  return <>Loading...</>;
};

export const Suspense = (props: SuspenseProps) => {
  return <S fallback={<SuspenseFallback />}>{props.children}</S>;
};
