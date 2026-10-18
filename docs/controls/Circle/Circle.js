import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
import { Slice } from './Slice';
const DEFAULT_RADIUS = 100;
const INNER_RADIUS_RATIO = 5;
const CircleBase = (props) => {
    const handleClick = (index) => {
        if (props.onClick)
            props.onClick(index);
    };
    const count = React.Children.count(props.children);
    // Angle size of a single slice
    const sliceSize = 360 / count;
    return (_jsxs("div", { className: props.className, children: [_jsx("div", { children: React.Children.map(props.children, (c, index) => _jsx(Slice, { color: props.color ?? '#333', radius: props.radius ?? DEFAULT_RADIUS, index: index, onClick: handleClick, angleBody: sliceSize, angleOffset: index * sliceSize, children: c })) }), _jsx("div", {})] }));
};
const CircleStyled = styled(CircleBase).attrs(p => ({
    outerRadius: p.radius ? p.radius : DEFAULT_RADIUS,
    innerRadius: p.radius ? p.radius / INNER_RADIUS_RATIO : DEFAULT_RADIUS / INNER_RADIUS_RATIO
})) `
  position: relative;
  /* Outer circle with slices */
  & > div:nth-child(1) {
    position: relative;
    width: ${p => p.outerRadius * 2 + 'px'};
    height: ${p => p.outerRadius * 2 + 'px'};
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;
  }
  /* Inner circle */
  & > div:nth-child(2) {
    position: absolute;
    left: ${p => p.outerRadius - p.innerRadius + 'px'};
    top: ${p => p.outerRadius - p.innerRadius + 'px'};
    width: ${p => p.innerRadius * 2 + 'px'};
    height: ${p => p.innerRadius * 2 + 'px'};
    background: #fff;
    border-radius: 50%;
    box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 3px;
  }
`;
const Circle = (props) => _jsx(CircleStyled, { ...props });
export { Circle };
