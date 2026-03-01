/* src/components/Select.jsx */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';


/**
 * UX 진행
 * <Button>태그를 통해서 <ul>태그 노출/미노출하여 select 태그처리처럼 보이게 정의함 
 */

const Select = ({
    label,
    options = [],
    value,
    onChange,
    placeholder = '선택해 주세요',
    disabled = false,
    error = false,
    id,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);
    //const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const selectId = id || `select-${Math.random().toString(36).slice(2, 9)}`; // substr 대신 slice 사용함

    // 외부 클릭 시 닫기 (Dropdown 로직 재사용)
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const handleToggle = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find((opt) => opt.value === value);

    return (
        <div className={`${styles.selectContainer} ${className}`.trim()} ref={selectRef}>
            {label && <label htmlFor={selectId} className={styles.label}>{label}</label>}
            
            <button
                id={selectId}
                type="button"
                className={`${styles.trigger} ${isOpen ? styles.isOpen : ''} ${disabled ? styles.isDisabled : ''} ${error ? styles.isError : ''}`}
                onClick={handleToggle}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                role="combobox"
            >
                <span className={selectedOption ? '' : styles.placeholder}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <i className={`${styles.arrow} ${isOpen ? styles.isOpen : ''}`}></i>
            </button>

            {isOpen && (
            <ul className={styles.optionsList} role="listbox">
                {options.map((option) => (
                <li
                    key={option.value}
                    className={`${styles.optionItem} ${value === option.value ? styles.isSelected : ''}`}
                    onClick={() => handleOptionClick(option.value)}
                    role="option"
                    aria-selected={value === option.value}
                >
                    {option.label}
                </li>
                ))}
            </ul>
            )}
        </div>
    );
};

// [전달값]
// - label: select 제목
// - options :  (필수)클릭 시 노출되는 데이터 배열 (예: [{ label: '서울', value: 'seoul' }, ...])
// - value : value
// - onChange : onchange 이벤트
// - placeholder : placeholder 정의
// - disabled : 사용불가 여부 (true/false)
// - error : error 여부 (true/false)
// - id : id 고유값
// - className : 전역 스타일 확장용  

Select.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
};

export default Select;



