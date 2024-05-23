interface GetDefaultStylesParams {
  justifyContent?: string;
  alignItems?: string;
  gap?: number | string;
}

export const getDefaultStyles = ({
  justifyContent,
  alignItems,
  gap,
}: GetDefaultStylesParams) => ({
  "justify-content": justifyContent || "flex-start",
  "align-items": alignItems || "flex-start",
  gap: `${gap || 0}px`,
});
