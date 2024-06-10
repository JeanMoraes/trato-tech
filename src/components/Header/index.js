import styles from './Header.module.scss';

export default function Header({ title, description, className = '', img}) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className={styles['header-imagem']}>
        <img
          alt={title}
          src={img}
        />
      </div>
    </header>
  )
}