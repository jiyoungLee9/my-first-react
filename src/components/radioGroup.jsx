// src/components/radioGroup.jsx
import styles from './radioGroup.module.scss.';

const radioGroup = (props) => {
    return (
        <div className={styles.rdo_group}>
            {props.label}
        </div>     
    );
};

export default radioGroup;
