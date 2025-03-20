import styles from './styles.module.scss';
function Mybutton() {
    return (
        <div>
            <button className={styles.btn}>M</button>
            <button className={styles.btn}>X</button>
        </div>
    );
}

export default Mybutton;
