import {Component} from 'react'
import {FaPinterestP} from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-title">
        <img
          className="footer-logo"
          src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636369709/TastyKitchens/footer_logo_ivcbfn.png"
          alt="Logo"
        />
        <h1 className="footer-heading">Tasty Kitchens </h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food
        <br />
        Contact us on
      </p>
      <div className="social-media-container">
        <FaPinterestP className="pinterest" />
        <BsInstagram className="instagram" />
        <BsTwitter className="twitter" />
        <ImFacebook className="facebook" />
      </div>
    </div>
  )
}
