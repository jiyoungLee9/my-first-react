/* src/components/Tabs.jsx */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./Tabs.module.scss";

/**
 * UX 진행
 * 모든 TAB패널(.tab_panel) 중 첫번째 패널( index 0)은 열려있음
 * TAB버튼(.tab)이 .is_active 정의로 선택여부 표시됨
 * TAB버튼(.tab) 클릭 시 'aria-controls' 에 정의된 id TAB패널(.tab_panel) 내용 content가 변경되면서 opacity로 노출됨
 */

const Tabs = ({     
    items = [], 
    defaultIndex, 
    onChange, 
    className
}) => {

    // 1. 상태 관리: 현재 선택된 탭의 인덱스
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (onChange) onChange(index); // 외부로 변경 알림
    }
    if (!items || items.length === 0) return null;

    return (
        <div 
            className={` ${styles.tab_wrap}${className ? ` ${className}` : ``}`}
        >
            <div className={styles.tab_list} role="tablist">
                {
                    items.map((item, index) => {
                        const isActive = activeIndex === index;
                        const tabId = `tab-${index}`;
                        const targetPanelId = `panel-${index}`;

                        return (
                            <button 
                                type="button"
                                role="tab" 
                                key={tabId} 
                                id={tabId}
                                aria-selected={isActive} 
                                aria-controls={targetPanelId}
                                className={` ${styles.tab}${isActive ? ` ${styles.is_active}` : ``}`}
                                onClick={ () => handleTabClick (index)}
                                disabled={item.isDisabled}
                            >{item.label}</button>
                        )
                    })
                }
            </div>
            <div
                role="tabpanel" 
                id={`panel-${activeIndex}`}
                className={styles.tab_panel}
                aria-labelledby={`tab-${activeIndex}`}
            >
                {items[activeIndex]?.content}
            </div>
        </div>
    )
}

/**
 * [전달 값]
 *  items : tab목록
 *  defaultIndex : 기본열림 tab번호 / 기본 0 (number)
 *  className : (전역) 스타일 확장용 (최상위)
 *  disabled : tab버튼 disabled 정의
 *  label : tab버튼 텍스트
 * ...props : 기타
 */

Tabs.propTypes = {
  /** 탭 데이터 배열: 각 항목은 label과 content를 포함해야 함 */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      isDisabled: PropTypes.bool,
    })
  ).isRequired,

  /** 처음 시작할 때 활성화될 탭의 인덱스 */
  defaultIndex: PropTypes.number,

  /** 탭이 변경될 때 실행되는 콜백 함수 */
  onChange: PropTypes.func,

  /** 커스텀 스타일을 위한 클래스명 */
  className: PropTypes.string,
};

// 기본값
Tabs.defaultProps = {
    defaultIndex: 0,
    onChange: () => {},
    className: '',
};

export default Tabs;
