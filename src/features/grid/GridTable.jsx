// src/features/grid/GridTable.jsx

import PropTypes from 'prop-types';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import styles from './GridTable.module.scss';

const GridTable = ({ columns, data, className }) => {
    return (
        <div className={`${styles.grid_table_container}${className ? ` ${className}` : ``}`}>
            <table className={styles.grid_table}>
                <colgroup>
                    {columns.map((col, index) => (
                        <col key={`col-${index}`} style={{ width: col.width || 'auto' }} />
                    ))}
                </colgroup>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className={styles.th} scope='col'>
                                {col.type === 'checkbox' ? <Checkbox id="all-check" className="flex_ac" /> : col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr key={`row-${rowIndex}`} className={styles.tr}>
                                {columns.map((col) => (
                                    <td key={`${rowIndex}-${col.key}`} className={styles.td}>
                                        {/* 셀 렌더링 로직: 타입에 따라 분기 */}
                                        {renderCell(col, row)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className={styles.empty_td}>
                                데이터가 없습니다.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// 셀 내부의 컨텐츠를 결정하는 헬퍼 함수
const renderCell = (col, row) => {
    const value = row[col.key];

    switch (col.type) {
        case 'checkbox':
            return <Checkbox id={`chk-${row.id}`} className="flex_ac" />;
        case 'button':
            return <Button label={col.buttonLabel || '보기'} size="sm" variant="sub" onClick={() => col.onClick(row)} />;
        case 'number':
            return <span>{value?.toLocaleString()}</span>;
        default:
            return <span>{value}</span>;
    }
};


// [전달값]
// props ====
// - className : (전역) 스타일 확장용
// - columns : thead 표기될 항목
// - data : row 표기 data

GridTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            width: PropTypes.string,
            type: PropTypes.oneOf(['text', 'number', 'checkbox', 'button']),
            buttonLabel: PropTypes.string,
            onClick: PropTypes.func,
        })
    ).isRequired,
    data: PropTypes.array.isRequired,
    className: PropTypes.string,
};

export default GridTable;
