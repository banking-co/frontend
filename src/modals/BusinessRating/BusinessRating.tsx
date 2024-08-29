import { DynamicList, Modal, Position, Text } from "uikit";
import { RatingUserItem } from "components";
import { useTranslation } from "i18nano";

export const BusinessRating = () => {
  const t = useTranslation();

  const ids = Array.from(Array(100), (_, i) => ++i);

  return (
    <Modal.Page>
      <Position type={"column"} stretched gap={24}>
        <Position type={"column"} stretched gap={24}>
          <Position type={"line"} stretched justifyContent={"center"}>
            <Text text={t("rating.modal.title")} tag={"h1"} />
          </Position>
          <Position type={"line"} stretched justifyContent={"center"}>
            <Text text={t("rating.modal.subtitle")} tag={"p"} isCentered />
          </Position>
          <Position
            type={"line"}
            stretched
            justifyContent={"center"}
            gap={24}
            alignItems={"flex-end"}
          >
            <RatingUserItem uid={ids[1]} />
            <RatingUserItem uid={ids[0]} />
            <RatingUserItem uid={ids[2]} />
          </Position>
        </Position>
        <DynamicList
          gap={8}
          items={ids.map((id, i) => {
            if (i === 0 || i === 1 || i === 2) return;
            return <RatingUserItem uid={id} />;
          })}
        />
      </Position>
    </Modal.Page>
  );
};
