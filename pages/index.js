import React from "react";
import axios from 'axios';
import useSWR from 'swr';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Swal from 'sweetalert2'
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";



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
    <nav className="navbar navbar-expand-lg navbar-light bg-light rtl">

  <div className="container-fluid">

    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
 
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
      </ul>
 
    </div>
  


    <div className="d-flex align-items-center">
  
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart"></i>
      </a>

   
      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
 
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>

  </div>

</nav>
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

          <a
            href="/posts/book-lists"
            className={styles.card}
          >
            <h2>נוספו לאחרונה &larr;</h2>
            <p>רשימת ספרים להורדה שנוספו לאחרונה, רשימה זו מתעדכנת מפעם לפעם</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>כתבו לנו &larr;</h2>
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
