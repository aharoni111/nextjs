import React from "react";
import axios from 'axios';
import useSWR from 'swr';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Swal from 'sweetalert2'
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Link from 'next/link'


export default function Home() {
  // const serverName = 'http://localhost:3001/'
  const Swal = require('sweetalert2')
  // const serverName = 'https://nextjs-q0hopx4md-aharoni111.vercel.app/'
  const [modalOpen, setModalOpen] = React.useState(false);
  async function sendReq(){
    let bookName = document.getElementById('bookName').value
    let authorName = document.getElementById('authorName').value
    let email = document.getElementById('emailAd').value
    let dataToSend = JSON.stringify({bookName,authorName,email})
    let headers = {"Access-Control-Allow-Origin": "*"}
    //  await axios.post(serverName + 'api/getbook',
    //  {bookName,authorName},
    //  headers
    // ).then(response => {
    //   console.log(response.data);
    // });
    let connectStr = "/api/getbook"
    fetch(connectStr, {
      method: 'POST', body: dataToSend, headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        setModalOpen(!modalOpen)
        Swal.fire({
          title: 'בוצע',
          text: 'הבקשה נשלחה בהצלחה, בעז"ה נשלח לכם בקרוב לינק להורדת הספר, שימו לב באם לא השארתם כתובת אימייל יש לעקוב אחרי ספרים אחרונים שנוספו למאגר בכדי לראות אם הספר נוסף',
          icon: 'success',
          confirmButtonText: 'אישור'
        })
  }
  function sendGet(){
    
     axios.get(serverName + 'api/getbook').then(response => {
      console.log(response.data);
      alert(response.data)
    });
  }
  return (
    
    <div className={styles.container}>
      {/* <div className={styles.baImg}></div> */}
      {/* <Image className={styles.baImg} src="/222.jpeg" width={100}
      height={500} layout="fill"></Image> */}
      
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
    <input type="email" className="form-control" id="emailAd" placeholder="כתובת אימייל"/>
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

          <a onClick={() => sendGet()} className={styles.card}>
            <h2>לימוד שיתופי &larr;</h2>
            <p>הפרויקט עדיין בבניה, בקרוב מאד נוכל לתת לכם עוד פרטים</p>
          </a>

          <Link  href="/posts/book-lists">
          <a
           
            className={styles.card}
          >
            <h2>נוספו לאחרונה &larr;</h2>
            <p>רשימת ספרים להורדה שנוספו לאחרונה, רשימה זו מתעדכנת מפעם לפעם</p>
          </a>
          </Link>
          <a
            className={styles.card}
          >
            <h2>כתבו לנו &larr;</h2>
            <p>
              כל הצעה או הערה והארה, תתקבל בשמחה, מוזמנים לכתוב!!
            </p>
          </a>
        </div>
      </main>


    </div>
  )
}
