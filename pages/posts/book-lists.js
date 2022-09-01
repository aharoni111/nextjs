import styles from '../../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

export default function BookLists(props) {
 
  var books = []
  var baselink = "https://download.hebrewbooks.org/downloadhandler.ashx?req="
  let connectStr = "/api/getrecentbooks?req="
  let search = "/api/search?req="

  var [data, setData] = useState(null);
  var [tableToShow, setTableToShow] = useState(false);
  var [page, setPage] = useState(0);
  var [picLink, setPicLink] = useState(false);
  const [isLoading, setLoading] = useState(false);      
        useEffect(() => {
          setLoading(true);
          fetch(connectStr + page, {
            method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setTableToShow(data);
              setPic(data[0].bookLink)
              // setData(data.filter(x=>{return x.bookName=='אבן לב'}));
              setLoading(false);
            });
        }, []);
        if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No about data</p>;
  // var searchString = document.getElementById('searchString').value
  // var tableToShow = data

  
function setT(){
  var searchString = document.getElementById('searchString').value
  if(searchString.length > 3){
    fetch(search, {
      method: 'POST',body:searchString})
      .then((res) => res.json())
      .then((searchData) => {
        // setData(searchData);
        setPic(searchData[0].bookLink)
        setTableToShow(searchData);
        // setData(data.filter(x=>{return x.bookName=='אבן לב'}));
        // setLoading(false);
      });
  }else{
    setTableToShow(data);
    setPic(data[0].bookLink)
  }
  // var dataToReturn = data.filter((x)=>{return x.bookName.includes(searchString) || x.bookAuthor.includes(searchString)})
  // setTableToShow(dataToReturn)
  console.log('end');
}
async function setNewPage(num){

    setPage(num)
    setLoading(true);
    setLoading(true);
    fetch(connectStr + num, {
      method: 'GET'})
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setPic(data[0].bookLink)
        setTableToShow(data);
        // setData(data.filter(x=>{return x.bookName=='אבן לב'}));
        setLoading(false);
      });

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No about data</p>;
}

function setPic(id){
  let link = 'https://beta.hebrewbooks.org/pagepngs/' + id + '_1_300_0.png'
  // alert(link)
  setPicLink(link)
}
function doldfile(bookName, bookLink){
  let connectStr = "/api/downloadBook"
  let dataToSend = JSON.stringify({bookName, bookLink})
    fetch(connectStr, {
      method: 'POST', body: dataToSend, headers: { 'Content-Type': 'application/json' }})
        .then(response => console.log(response))

 
  // var link = document.createElement("a");
  // link.download = 'aa.pdf';
  // link.href = 'https://download.hebrewbooks.org/downloadhandler.ashx?req=916';
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
  // delete link;
  // var blobUrl = URL.createObjectURL(blob);
    
   
  // alert(link)
}
return(
  
  <div className={styles.container}>

<input placeholder='חפש שם ספר או מחבר' onKeyUp={()=>setT()} id="searchString"></input>
<div className={styles.bookListHolder}>
<div className={styles.rightSide}>
<nav aria-label="Page navigation example" className={styles.ltrr}>
  <ul class="pagination">
    <li onClick={()=> setNewPage(1)} class="page-item"><a class="page-link" href="#">1</a></li>
    <li onClick={()=> setNewPage(2)} class="page-item"><a class="page-link" href="#">2</a></li>
    <li onClick={()=> setNewPage(3)} class="page-item"><a class="page-link" href="#">3</a></li>
    <li onClick={()=> setNewPage(4)} class="page-item"><a class="page-link" href="#">4</a></li>
    <li onClick={()=> setNewPage(5)} class="page-item"><a class="page-link" href="#">5</a></li>
    <li onClick={()=> setNewPage(6)} class="page-item"><a class="page-link" href="#">6</a></li>
    <li onClick={()=> setNewPage(7)} class="page-item"><a class="page-link" href="#">7</a></li>
    <li onClick={()=> setNewPage(8)} class="page-item"><a class="page-link" href="#">8</a></li>
    <li onClick={()=> setNewPage(9)} class="page-item"><a class="page-link" href="#">9</a></li>
    <li onClick={()=> setNewPage(10)} class="page-item"><a class="page-link" href="#">10</a></li>
    <li onClick={()=> setNewPage(11)} class="page-item"><a class="page-link" href="#">11</a></li>
    <li onClick={()=> setNewPage(12)} class="page-item"><a class="page-link" href="#">12</a></li>
    <li onClick={()=> setNewPage(13)} class="page-item"><a class="page-link" href="#">13</a></li>
    <li onClick={()=> setNewPage(14)} class="page-item"><a class="page-link" href="#">14</a></li>
    <li onClick={()=> setNewPage(15)} class="page-item"><a class="page-link" href="#">15</a></li>
    <li onClick={()=> setNewPage(16)} class="page-item"><a class="page-link" href="#">16</a></li>
    <li onClick={()=> setNewPage(17)} class="page-item"><a class="page-link" href="#">17</a></li>
    <li onClick={()=> setNewPage(18)} class="page-item"><a class="page-link" href="#">18</a></li>
    <li onClick={()=> setNewPage(19)} class="page-item"><a class="page-link" href="#">19</a></li>
    <li onClick={()=> setNewPage(20)} class="page-item"><a class="page-link" href="#">20</a></li>
  </ul>
</nav>
<table className="table table-sm table-light ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">שם הספר</th>
      <th scope="col">שם המחבר</th>
      <th scope="col">מקום הדפסה</th>
      <th scope="col">שנת הדפסה</th>
      <th scope="col">קישור להורדה</th>
    </tr>
  </thead>
  <tbody>
  {tableToShow.map((row, index) => {
          return <tr onMouseEnter={()=>setPic(tableToShow[index]?.bookLink)} key={row.id}>
            <th scope="row">{index+1}</th>
            <td> {tableToShow[index]?.bookName}</td>
            <td> {tableToShow[index]?.bookAuthor}</td>
            <td> {tableToShow[index]?.bookPlace}</td>
            <td> {tableToShow[index]?.bookYear}</td>
            <td> <Link href= {baselink + tableToShow[index]?.bookLink}><a onClick={()=>doldfile(tableToShow[index]?.bookName, tableToShow[index]?.bookLink)}>לחץ להורדה</a></Link></td>
            
            <br/>
          </tr>;
        })}
    
  </tbody>
</table>
</div>
<div className={styles.lefSide}>
<img
      className={styles.previewImg}
      src={picLink}
      alt="Picture of the author"
      width={500}
      height={750}
    />
    </div> 
</div>
</div>
)
}