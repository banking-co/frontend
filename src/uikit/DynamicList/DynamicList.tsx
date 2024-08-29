import "./DynamicList.sass";

import { useCallback, useEffect, useRef, useState } from "react";

import { DynamicListProps } from "./DynamicList.interface";
import { Position } from "../Position/Position";
import classNames from "classnames";

export const DynamicList: DynamicListProps<any> = ({
  items,
  onLoadData,
  threshold = 5,
  gap,
  itemClassName = "",
  ...rest
}) => {
  const [list, setList] = useState<any[]>(items);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMoreItems = useCallback(async () => {
    if (onLoadData) {
      setLoading(true);
      const newItems = await onLoadData();
      setList((prevList) => [...prevList, ...newItems]);
      setLoading(false);
      if (newItems.length === 0) setHasMore(false);
    }
  }, [onLoadData]);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (!observer) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreItems();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMoreItems],
  );

  useEffect(() => {
    setList(items);
  }, [items]);

  return (
    <Position type={"column"} gap={gap} stretched {...rest}>
      {list.map((item, index) => (
        <div
          className={classNames("DynamicList__item", itemClassName)}
          ref={index === list.length - threshold ? lastItemRef : undefined}
          key={"dynamyc-list-item-" + index}
        >
          {item}
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </Position>
  );
};
