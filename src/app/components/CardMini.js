import styles from './cardMini.module.css'

export default function CardMini({title, description, imgUrl}){
    return(
        <>
            <div className={styles.info}>
                <img src={imgUrl} className={styles.img}/>
                <div className={styles.textInfo}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}