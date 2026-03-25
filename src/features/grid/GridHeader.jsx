// /src/features/grid/GridHeader.jsx
import PropTypes from 'prop-types';
import Select from '../../components/Select';
import Button from '../../components/Button';
import styles from './GridHeader.module.scss';


const GridHeader = ({ allNum, pageSize, onPageSizeChange, className }) => {
    
    const viewOption = [
        { label: '10개씩 보기', value: '10' },
        { label: '20개씩 보기', value: '20' },
        { label: '30개씩 보기', value: '30' },
        { label: '40개씩 보기', value: '40' },
    ]

    return ( 
        <div className={ `${styles.grid_header_wrap}${className ? ` ${className}` : ``}` } >
            <div className={styles.header_info_area}>
                <span>총</span><strong className={styles.info_strong}>{allNum}</strong><span>건</span>
            </div>
            <div className={styles.header_sorting_area}>
                <Select
                    options = {viewOption}
                    placeholder = '목록 선택'
                    onChange={onPageSizeChange} // 부모에게 알림
                    value={pageSize} // 부모의 상태와 동기화
                    defaultValue="10"
                />
                <Button
                    label = "완료"
                    variant = "sub"
                    size = "sm"
                />
            </div>
        </div>   
    );
};


// [전달값]
// props ====
// - className : (전역) 스타일 확장용
GridHeader.propTypes = {
    allNum : PropTypes.number.isRequired, //전체 갯수
    className: PropTypes.string,
    pageSize : PropTypes.number, //페이지 목록 변화 후 최종감지 값
    onPageSizeChange : PropTypes.func, //페이지 목록 갯수 변화 감지용
};

// 기본값
GridHeader.defaultProps = {
    allNum : 10,
    className: '',
};

export default GridHeader;
