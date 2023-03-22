import { useContext } from "react";
import cx from "classnames";
import { VISIBILITY_TYPE, TVisibilityType } from '../enmu'
import { useStore } from "../store/RootStore";
import { observer } from "@quarkunlimit/qu-mobx";
import './index.scss'

const VisibilityFilters = () => {
  const root = useStore()
  const { todoStore } = root
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_TYPE).map((item: TVisibilityType | string) => {
        return (
          <span
            key={item}
            className={cx("visibility-filters__item", {
              'visibility-filters__item--active': todoStore.logic.activeType === VISIBILITY_TYPE[item as TVisibilityType],
            })}
            onClick={() => todoStore.logic.filterTodos(VISIBILITY_TYPE[item as TVisibilityType])}
          >
            {VISIBILITY_TYPE[item as TVisibilityType]}
          </span>
        );
      })}
    </div>
  );
};

export default observer(VisibilityFilters);
