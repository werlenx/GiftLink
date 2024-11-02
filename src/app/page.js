import Head from "next/head";
import Button from "./components/Button.js"
import styles from './Home.module.css';
import CardCampaign from "./components/CardCampaign.js";
import CardMini from "./components/CardMini.js";

export default function Home() {
    const countCollab = 10;
    const balance = 1000;
    const title = "Papai urso";
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim id nunc tincidunt faucibus. Donec euismod, dolor ac ultricies bibendum, purus lectus bibendum tellus, vel ultricies sapien felis a nunc.";
    const imgUrl = "./getImg.png";
    return (
        <>
            <Head>
                <title>Donate Crypto - Plataforma Descentralizada de Doações</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Plataforma blockchain de doações - Conecte sua carteira e apoie causas descentralizadas" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div className={styles.banner}>
                    <img src="./giftlink_logo.svg"></img>
                    <h2>
                    Doe de forma descentralizada! <br/>
                    Apoie causas com transparência e segurança. 
                    Juntos, fazemos a diferença!"
                    </h2>
                    <div className={styles.button_container}>
                        <Button label="Conectar MetaMask" ico="/MetaMask.png"/>
                    </div>
                </div>
                <section className={styles.section}>
                    <CardCampaign 
                        imgUrl={imgUrl} 
                        title={title} 
                        description={description} 
                        n_collabs={countCollab} 
                        balance={balance}
                    />
                    <div className={styles.button_container}>
                        <Button label="Doação" ico="./donate_ico.png"/>
                        <Button label="Saque" ico="./withdraw_ico.png"/>
                    </div>
                    <h2 className={styles.title}>Campanhas ativas</h2>
                    <hr className={styles.divisor}/>
                    <div className={styles.list}>
                        <CardMini title={title} description={description} imgUrl={imgUrl}/>
                        <CardMini title={title} description={description} imgUrl={imgUrl}/>
                        <CardMini title={title} description={description} imgUrl={imgUrl}/>
                    </div>
                </section>
                <div className={styles.formContainer}>
                    <h2 className={styles.formTitle}>Crie uma campanha</h2>
                    <div className={styles.campo}>
                        <label className="formLabel" htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Informe um nome para sua campanha." />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" id="descricao" placeholder="Faça a descrição da sua campanha." />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="imgUrl">URL da imagem</label>
                        <input type="text" id="imgUrl" placeholder="Informe a URL da imagem da campanha." />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="videoUrl">URL do video</label>
                        <input type="text" id="videoUrl" placeholder="Informe a URL da imagem da campanha." />
                    </div>
                    <div className={styles.button_container}>
                        <Button label="Enviar" ico="./send_ico.png"/>
                    </div>
                </div>


            </main>
            
        </>
    );
}
