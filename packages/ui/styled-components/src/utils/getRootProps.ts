import { AnyObject, EElement, Value } from '@udecode/plate-core';
import { StyledElementProps } from '../StyledElement/StyledElement.types';
import { StyledLeafProps } from '../StyledLeaf/StyledLeaf.types';

export const getRootProps = <V extends Value = Value>(
  props: StyledElementProps<V, EElement<V>> | StyledLeafProps<V> | AnyObject
) => {
  const {
    editor,
    attributes,
    children,
    nodeProps,
    styles,
    classNames,
    prefixClassNames,
    element,
    leaf,
    text,
    ...rootProps
  } = props;

  return rootProps;
};
