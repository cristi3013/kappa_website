import React, { memo } from 'react';
import useAutoHorizontalScroll from '../useAutoHorizontalScroll';

import styled from 'styled-components';
const ItemsContainerCss = styled.div`
  display: inline-flex;

  & > * {
    margin-right: 10px;
    width: 1000px;
    height: 200px;
    flex-shrink: 0;
  }
`;
const ItemCss = styled.div`
  background: ${({ color }) => color};
`;

const BloomdSection3 = memo(function BloomdSection2() {
  const ref = useAutoHorizontalScroll();

  return (
    <div style={{ overflow: 'hidden' }}>
      <ItemsContainerCss ref={ref}>
        <ItemCss color="blue" />
        <ItemCss color="red" />
        <ItemCss color="purple" />
      </ItemsContainerCss>
    </div>
  );
});

export default BloomdSection3;
