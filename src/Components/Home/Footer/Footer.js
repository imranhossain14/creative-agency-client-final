import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="mt-5 contactForm footer" >
            <div className="row pt-5 " >
                    <div className="col-md-6 text-left ml-5 pl-5 mt-5" style={{maxWidth:"500px"}}>
                            <h1> <strong>Let us handle your project, professionally.</strong> </h1>
                    
                            <p className="mt-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>


            <div className=" col-md-6 p-5 ml-auto" >
                <form>
                <div class="form-group">
                    
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email Address"/>
                </div>

                <div class="form-group">
                    
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name/Company's Name"/>
                </div>
                
                <div class="form-group">
                    
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Your Message"></textarea>
                </div>
                <input type="submit" value="SEND" className="btn btn-dark pr-5 pl-5"/>
                
                </form>

            </div>
        </div>
        <div className="text-center mt-5">
                <small > Copyright Orange Lab &copy; 2020</small>
            </div>
        </div>

        
    );
};

export default Footer;