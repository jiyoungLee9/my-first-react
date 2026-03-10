/* src/components/SequentialTabs.jsx */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SequentialTabs.module.scss';

// UX 진행
//  <button>,<div>로 버튼과 탭컨텐츠로 논리적 컨텐츠 순서에 맞게 태그 처리됨 (css order 이용하여 정의 함)
// 탭 버튼은 .isActive className으로 선택 구분됨
// 탭 컨텐츠는 모두 정의되어 있고 display none 정의되어 있고 .isActive 정의된 것은 display block 처리되어 있음

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


// [전달값]
// - items :tab목록 ( label, content ) (필수)
// - defaultIndex : 기본열림 tab번호 / 기본 0 (number)
// - onChange : tabButton click 이벤트 
// - className : 스타일 확장용 (최상위)

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

// 기본값
SequentialTabs.defaultProps = {
    defaultIndex: 0,
    onChange: () => {},
    className: '',
};

export default SequentialTabs;

