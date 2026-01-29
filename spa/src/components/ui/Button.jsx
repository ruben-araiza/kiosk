import styles from './button.module.css';

export default function Button({ children, onClick }) {
  console.log('ruben');

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
