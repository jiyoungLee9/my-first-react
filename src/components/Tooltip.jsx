/* src/components/Tooltip.jsx */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

/**
 * UX 진행
 * children 내 태그 mouseover 시 툴팁over 됨 
 * 툴팁은 .bubble 로 absolute로 노출되고, 상, 하, 좌, 우 강제로 type으로 지정됨 (위치 자동지정은 library 사용 지향 예정)
 * 툴팁은 최대 너비값, 최대 높이값 존재하며 scroll 처리됨
 */


const Tooltip = ({
    content,
    children,
    position = 'top',
    id, // 웹 접근성을 위한 고유 ID
    className = '',
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    // 툴팁의 유니크 ID (제공되지 않으면 랜덤 생성 - 실제 프로젝트에선 useId 훅 권장)
    //const tooltipId = id || `tooltip-${Math.random().toString(36).substr(2, 9)}`;
    const tooltipId = id || `tooltip-${Math.random().toString(36).slice(2, 9)}`; // substr 대신 slice 사용함

    return (
    <div 
        className={styles.tooltip_wrap}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip} // 키보드 접근성 대응
        onBlur={hideTooltip}
    >
        {/* 트리거 요소: 접근성을 위해 aria-describedby 연결 */}

        {React.cloneElement(children, {
            'aria-describedby': isVisible ? tooltipId : undefined,
            tabIndex: '0', // 키보드 포커스 가능하게 처리
        })}

        {/* 버블 보일 때 */}
        {isVisible && (
        <div
            id={tooltipId}
            role="tooltip"
            className={`${styles.bubble} ${styles[position]} ${className}`.trim()} //position 값으로 해당 className 정의되어 있음 top, left, right, bottom
        >
            {content}
        </div>
        )}
    </div>
    );
};

// [전달값]
// - content: (필수) 툴팁 .bubble 안에 들어갈 내용으로 .node로 지정함 (html 태그 및 string 모두 가능함)
// - children : (필수) 툴팁이 붙을 대상. 단일 엘리먼트
// - position : 툴팁의 위치 (대상 기준) top, bottom, left, right
// - id : 유지시간
// - className : 전역 스타일 확장용

Tooltip.propTypes = {
    content: PropTypes.node.isRequired, // 툴팁 내용
    children: PropTypes.element.isRequired, // 툴팁이 붙을 대상 (단일 엘리먼트)
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    id: PropTypes.string,
    className: PropTypes.string,
};

export default Tooltip;

