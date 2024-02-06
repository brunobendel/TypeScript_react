import styles from './Header.module.css';
import logo from '../assets/simbol.png';

export function Header(){
    return(
        <header className={styles.header}>
            <img src="/src/assets/simbol.png" alt="logo" />
            <strong>Titulo</strong>
        </header>
    );
}