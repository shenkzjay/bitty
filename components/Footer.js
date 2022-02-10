

import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";


function Footer(){
    return(
        <div>
            <footer className="footer">
    <div className="container">
        <div className="row pt-5 mt-5">
            <div className="col-md-5 pb-5">
                <h5><img src="logo.svg"></img></h5>
                <div className="row">
                    <div className="col-6">
                    <h5 className="text-md-left">Lets Connect</h5>
                <p>Plan your future and take the next step now</p>
                <p className="fw-bold">Email: info@bitke.io</p>
                    </div>
                    
                        <IconContext.Provider value={{color:'white', padding:'10px', size:'2em'}}>
                        <div>
                  <a target="_blank" href="https://web.facebook.com/BitcoinKenya254/" title="Facebook"> <FaFacebook /> </a> <a target="_blank" href="https://www.linkedin.com/company/bitcoinke/" title="Linkedin">
<FaLinkedin/></a> <a href="https://twitter.com/BitcoinKE" target="_blank" title="Twitter"><FaTwitter /></a> <a href="https://www.youtube.com/channel/UCf42KjMYcb6GMcXpXc9LPdw/videos" target="_blank" title="Youtube"> <FaYoutube /> </a>
                  </div>
                  </IconContext.Provider>
                  
                   
                </div>
            </div>
            <div className="col-md-2">
                {/* <h5 className="text-md-left">Lets Connect</h5>
                <p>Plan your future and take the next step now</p>
                <br /> */}
            </div>
            <div className="col-md-5">
                <form>
                <div className="form-group">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" />
                 </div>

                    <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="message"></textarea>
                </div>
                    <fieldset className="form-group text-xs-right">
                        <button type="button" className="btn btn-light btn-md">Send</button>
                    </fieldset>
                </form>
            </div>
            <div className="col-12 text-center">&copy; copyright Bitke 2022</div>
        </div>
    </div>
</footer>
</div>
    )
}

export default Footer;