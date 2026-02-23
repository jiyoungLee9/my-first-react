/* src/components/SequentialTabs.jsx */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SequentialTabs.module.scss';

/* ### 일괄 제안 소스로 작성 중 */

/**
 * UX 진행
 */

const SequentialTabs = ({ 
  items = [], 
  defaultIndex = 0, 
  onChange, 
  className = '' 
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (onChange) onChange(index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`${styles.container} ${className}`.trim()}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const tabId = `seq-tab-${index}`;
        const panelId = `seq-panel-${index}`;

        return (
          <React.Fragment key={index}>
            {/* 1. 탭 버튼 */}
            <button
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              className={`${styles.tabButton} ${isActive ? styles.isActive : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {item.label}
            </button>

            {/* 2. 탭 패널 (마크업 상 버튼 바로 다음에 위치) */}
            <div
              id={panelId}
              role="tabpanel"
              aria-labelledby={tabId}
              className={`${styles.tabPanel} ${isActive ? styles.isActive : ''}`}
              // 논리적 순서를 유지하되, 비활성 패널은 스크린 리더가 건너뛰도록 처리
              hidden={!isActive}
            >
              {item.content}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

SequentialTabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default SequentialTabs;

