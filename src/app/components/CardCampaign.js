import styles from './CardCampaign.module.css'

export default function CardCampaign({imgUrl, title, description, n_collabs, balance}){
    return(
        <>

            <div className={styles.container}>
                <div className={styles.info}>
                    <img src={imgUrl} className={styles.img}/>
                    <div className={styles.textInfo}>
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={styles.data}>
                    <h4>Apoiadores <span>{n_collabs}</span></h4>
                    <h4>Volume <span>R$ {balance}</span></h4>
                </div>
            </div>
            

        </>
       
    )

}