import styles from './Info.module.css'

function Info() {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>Some text</h1>
      <button>Click me!</button>
    </div>
  )
}

export default Info;