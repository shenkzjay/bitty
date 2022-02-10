// import link from next
import Link from "next/link"

//import head from next
import Head from "next/head"
// import { Container, Nav,  Navbar} from "react-bootstrap";


//import react
// import React from 'react'

//import styles from module

//function init
function Navigation() {
  return (
    <div>
      {/* <Head>
        <link href="custom.css" rel="stylesheet" />
      </Head> */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand" ><img src="logo.svg" width="70%" height="70%" alt="decking" crossOrigin="anonymous"></img></a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>


            </ul>
            <div className="d-flex">
              <li className="nav-item">
                <Link href="/About">
                  <a className="nav-link active" aria-current="page">About</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/Project">
                  <a className="nav-link active" aria-current="page" >Project</a>
                </Link>
              </li>
              <button className="btn btn-outline-success" type="submit">Report Event</button>
            </div>
          </div>
        </div>
      </nav> */}
 <header className="header-global" id="home">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="/logo.svg"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item pt-1">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>

                <li className="nav-item pt-1">
                  <a className="nav-link active" aria-current="page" href="/About">About</a>
                </li>
                <li className="nav-item pt-1">
                  <a className="nav-link active" aria-current="page" href="/ReportMap">Submit a Company</a>
                </li>
                <li className="nav-item pt-1 dropdown">
                  <a className="nav-link  dropdown-toggle active"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/About">Media</a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/Digitalmedia">Media</a>
            </li>
            <li><a className="dropdown-item"  href="/Mktassess">PR and Marketing</a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/Report">Reports</a></li>
          </ul>
                </li>

                <li className="nav-item pt-1">
                  <a className="nav-link active" aria-current="page" href="/Project">Project</a>
                </li>

                 <li className="nav-item pt-1">
                  <a className="nav-link active" aria-current="page" href="/Dao">DAO&apos;s &amp; Community  </a>
                </li>

                {/* <li className="nav-item">
                <a className="btn btn-sm  btn-outline-success" type="submit" href="/Report">Report Event</a>
                </li> */}

               
              </ul>

            </div>
          </div>
        </nav>
     
      </header>
    </div>
  );
}

export default Navigation;