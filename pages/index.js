import React from "react";
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function Home() {
  // const serverName = 'http://localhost:3001/'
  const serverName = 'https://nextjs-q0hopx4md-aharoni111.vercel.app/'
  const [modalOpen, setModalOpen] = React.useState(false);
  function sendReq(){
    let bookName = document.getElementById('bookName').value
    let authorName = document.getElementById('authorName').value
     axios.post(serverName + 'api/getbook', {bookName,authorName}).then(response => {
      console.log(response.data);
    });
    alert(bookName + ', ' + authorName)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>ספרי קודש</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            בקשות ספרים
          </h5>

        </div>
        <ModalBody>
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">שם הספר</label>
    <input type="text" className="form-control" id="bookName" aria-describedby="emailHelp" placeholder="שם הספר"/>
    <small> </small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">שם המחבר</label>
    <input type="text" className="form-control" id="authorName" aria-describedby="emailHelp" placeholder="שם המחבר"/>
    <small> </small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">כתובת אימייל</label>
    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="כתובת אימייל"/>
    <small id="emailHelp" className="form-text text-muted">אין חובה למלא אימייל, אבל נשלח לך הודעה ברגע שהספר יעלה</small>
  </div>


</form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            סגור
          </Button>
          <Button color="primary" type="button"  onClick={() => sendReq()}>
            שלח בקשה
          </Button>
        </ModalFooter>
      </Modal>
        <h1 className={styles.title}>
          ספרי קודש <a href="https://nextjs.org"></a>
        </h1>

        <p className={styles.description}>
          רוב רובם של הספרים בהישג יד, אנחנו נשתדל להענות לבקשות פרטיות בהקדם האפשרי
        </p>

        <div className={styles.grid}>
          <a onClick={() => setModalOpen(!modalOpen)} className={styles.card}>
            <h2> בקשות ספרים &larr;</h2>
            <p>כאן ניתן לבקש ספרים, ואנחנו נשתדל להעלות אותם לאתר בהקדם האפשרי</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>לימוד שיתופי &larr;</h2>
            <p>הפרויקט עדיין בבניה, בקרוב מאד נוכל לתת לכם עוד פרטים</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>נוספו לאחרונה &rarr;</h2>
            <p>רשימת ספרים להורדה שנוספו לאחרונה, רשימה זו מתעדכנת מפעם לפעם</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>כתבו לנו &rarr;</h2>
            <p>
              כל הצעה או הערה והארה, תתקבל בשמחה, מוזמנים לכתוב!!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
