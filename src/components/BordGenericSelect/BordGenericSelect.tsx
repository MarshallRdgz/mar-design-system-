import { useCallback, useEffect, useRef } from 'react';
import { IBordGenericSelectProps } from './BordGenericSelect.types';
import './BordGenericSelect.scss';

const BordGenericSelect = ({
  selectOptions,
  changeSelectedOption,
  defaultValue,
  changeOpenStatusFunction,
  absolutePositionElement,
}: IBordGenericSelectProps) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const onHandleClickAway = useCallback(
    async (e: MouseEvent) => {
      if (refContainer?.current && !refContainer.current.contains(e.target instanceof Node ? e.target : null)) {
        changeSelectedOption({ value: defaultValue, name: defaultValue });
        if (changeOpenStatusFunction) changeOpenStatusFunction();
      }
    },
    [refContainer]
  );

  useEffect(() => {
    window.addEventListener('mousedown', onHandleClickAway);
    return () => {
      window.removeEventListener('mousedown', onHandleClickAway);
    };
  }, [onHandleClickAway]);

  return (
    <div ref={refContainer} className="bordGenericSelect">
      <div className="containerAbsolute">{selectOptions}</div>
      {absolutePositionElement}
    </div>
  );
};

export default BordGenericSelect;
