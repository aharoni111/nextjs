
import styles from '../../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";



export default function BookLists(props) {
  var books = []
  let connectStr = "/api/getrecentbooks"
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
     fetch(connectStr, {
      method: 'GET'})
        .then(async response => books = response.data)
       
        useEffect(() => {
          setLoading(true);
          fetch(connectStr, {
            method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
            });
        }, []);
        if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No about data</p>;
return(
  
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

<table class="table table-sm table-light">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">שם הספר</th>
      <th scope="col">שם המחבר</th>
      <th scope="col">קישור להורדה</th>
    </tr>
  </thead>
  <tbody>
  {data.map((row, index) => {
          return <tr key={row.id}>
            <th scope="row">{data[index]?.id}</th>
            <td> {data[index]?.bookName}</td>
            <td> {data[index]?.bookAuthor}</td>
            <td> <a href={data[index]?.bookLink}  download="custom-filename.pdf">לחץ להורדה</a></td>
            
            <br/>
          </tr>;
        })}
    
  </tbody>
</table>
</div>
)
}