// /src/features/grid/PaginationButton.jsx
import PropTypes from 'prop-types';
import styles from './PaginationButton.module.scss';


const PaginationButton = (props) => {
    return ( 
        <div className={ `${styles.page_btn_wrap}${props.className ? ` ${props.className}` : ``}` } >
            {  
                props.itemList.map( (item) => {
                    return (
                        <button className={ `${styles.page_btn}${item.innerClassName ? ` ${styles[item.innerClassName]}` : ``}` }  onClick={item.onClick} key={item.value}>
                            <span className={styles.btn_txt}>{item.label}</span>
                        </button>
                    );
                })
            }
        </div>   
    );
};


// [전달값]
// props ====
// - itemList: 페이지버튼 (버튼label, 값, disabled, onclick)
// - className : (전역) 스타일 확장용
PaginationButton.propTypes = {
    //페이지 버튼 목록
    itemList : PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, //value (string, number)
            innerClassName : PropTypes.string, // 내부에 선언되는 className
            disabled: PropTypes.bool,
            onClick: PropTypes.func 
        })    
    ),
    className: PropTypes.string,
};

// 기본값
PaginationButton.defaultProps = {
    itemList : [
        { label : '처음', value:'first', innerClassName : 'is_first', onClick: () => {} },
        { label : '이전', value:'prev', innerClassName : 'is_prev', onClick: () => {} },
        { label : '1', value:'1', onClick: () => {} },
        { label : '2', value:'2', onClick: () => {} },
        { label : '3', value:'3', onClick: () => {} },
        { label : '4', value:'4', onClick: () => {} },
        { label : '5', value:'5', onClick: () => {} },
        { label : '다음', value:'next', innerClassName : 'is_next', onClick: () => {} },
        { label : '마지막', value:'last', innerClassName : 'is_last', onClick: () => {} },
    ],
    className: '',
};

export default PaginationButton;
