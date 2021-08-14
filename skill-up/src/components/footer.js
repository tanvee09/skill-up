import React from "react";
import logo from '../assets/books.jpg'

export default function Footer() {

  return (
    <div className="footer">
            <div className="footer__logo-box">
                <img src="" alt="Full logo" className="footer__logo logo mr-3" />
            </div>
            <div className="row footer-bottom d-flex justify-content-center w-100">
                <div className="col-1-of-2">
                    <div className="footer__navigation ">
                        <ul className="footer__list d-flex flex-row justify-content-center">
                            <div className="p-2"><li className="footer_item">Company</li></div>
                            <div className="p-2"><li className="footer_item">Contact us</li></div>
                            <div className="p-2"><li className="footer_item">Privacy policy</li></div>
                            <div className="p-2"><li className="footer_item">Terms</li></div>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="footer__copyright">
                        <p>Built by Skill-Up Systems Pvt. Ltd</p>
                        <p>Copyright &copy; by  SKILL-UP</p>
                    </div>
                </div>
            </div>
        </div>
  );
}