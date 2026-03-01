/* src/components/Dropdown.jsx */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';

/* ### 일괄 제안 소스로 작성 중 */

/**
 * UX 진행
 */

const Dropdown = ({
    options = [],
    value,
    onSelect,
    placeholder = '선택하세요',
    disabled = false,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // 컴포넌트 영역 탐지를 위한 ref

    // 외부 클릭 감지 로직
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // 클릭된 요소가 dropdownRef 내부에 없으면 닫기
            // dropdownRef.current : 보관함에서 꺼낸 진짜 <div> 요소
            // event.target : 지금 내가 실제로 클릭한 지점 (화면 전체 중 하나)            
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // 해석: 
                // 1. 일단 보관함에 DOM이 잘 들어있는지 확인하고 (dropdownRef.current)
                // 2. 내가 클릭한 지점(event.target)이 저 <div>의 자식인지 아닌지 확인해! (!contains)
                // 3. 자식이 아니면(바깥을 클릭했으면) 모달을 닫아라!                
                setIsOpen(false);
            }
        };

        if (isOpen) {
            // 윈도우 전체에 클릭 이벤트를 겁니다. (jQuery의 $(document).on('click', ...))
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            // 컴포넌트가 사라지거나 닫힐 때 이벤트를 제거합니다. (메모리 관리)
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    const toggleDropdown = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    // 현재 선택된 옵션 찾기
    const selectedOption = options.find((opt) => opt.value === value);

    return (
    <div 
        className={`${styles.dropdown} ${className}`.trim()} 
        ref={dropdownRef}
    >
        <button
            type="button"
            className={styles.trigger}
            onClick={toggleDropdown}
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
        >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <i className={`${styles.arrow} ${isOpen ? styles.isOpen : ''}`}></i>
        </button>

        {isOpen && (
        <ul className={styles.menu} role="listbox">
            {options.length > 0 ? (
            options.map((option) => (
                <li
                    key={option.value}
                    className={`${styles.item} ${value === option.value ? styles.isSelected : ''}`}
                    onClick={() => handleSelect(option)}
                    role="option"
                    aria-selected={value === option.value}
                >
                    {option.label}
                </li>
            ))
            ) : (
                
            //options.length가 없을 경우
            <li className={styles.item} style={{ cursor: 'default', color: '#999' }}>
                데이터가 없습니다.
            </li>
            )}
        </ul>
        )}
    </div>
    );
};


Dropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default Dropdown;



