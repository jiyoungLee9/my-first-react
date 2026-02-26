/* src/components/Tooltip.jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

/* ### 일괄 제안 소스로 작성 중 */

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

Tooltip.propTypes = {
    content: PropTypes.node.isRequired, // 툴팁 내용
    children: PropTypes.element.isRequired, // 툴팁이 붙을 대상 (단일 엘리먼트)
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    id: PropTypes.string,
    className: PropTypes.string,
};

export default Tooltip;

