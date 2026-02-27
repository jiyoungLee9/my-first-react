/* src/components/Badge.jsx */
import PropTypes from 'prop-types';
import styles from './Badge.module.scss';

const Badge = ({
    type,
    id,
    badgeLabel = '마우스hover시 안내',
    className,
    ...props
}) => {

    const classReset =  [
        styles.badge,
        type ? styles[type] : "",
        className ? className : "",
    ]
    .filter(Boolean)
    .join(' ');
    
    return (
        <button type="button" className={classReset} id={id} {...props}>
            <span className="hdn">{badgeLabel}</span>
        </button>
    );
};

Badge.propTypes = {
    type : PropTypes.oneOf(['type_error', 'type_info']), //뱃지 style
    id: PropTypes.string, 
    badgeLabel : PropTypes.string, //aria-label 처리 시 표기내용
    className: PropTypes.string,    
};

export default Badge;

