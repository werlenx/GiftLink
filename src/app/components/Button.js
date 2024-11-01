import styles from './Button.module.css';

export default function Button({ label, ico}) {
    return (
        <button className={styles.button}>
            <img
                className={styles.ico}
                src={ico}
                alt={label}
            />
            {label}
        </button>
    );
}
