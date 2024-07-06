import React from "react";
import { svgFacebook, svgInsta, svgTwitter, svgYoutube } from "./dataSVG";

export const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='social-links'>
          <section>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d={svgFacebook} fill='currentColor'></path>
            </svg>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d={svgInsta} fill='currentColor'></path>
            </svg>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d={svgTwitter} fill='currentColor'></path>
            </svg>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d={svgYoutube} fill='currentColor'></path>
            </svg>
          </section>
        </div>
        <div className='desc-container'>
          <div className='desc'>
            <a>Audio Description</a>
          </div>
          <div className='desc'>
            <a>Help Centre</a>
          </div>
          <div className='desc'>
            <a>Gift Cards</a>
          </div>
          <div className='desc'>
            <a>Media Centre</a>
          </div>
          <div className='desc'>
            <a>Investor Relations</a>
          </div>
          <div className='desc'>
            <a>Jobs</a>
          </div>
          <div className='desc'>
            <a>Terms of Use</a>
          </div>
          <div className='desc'>
            <a>Privacy</a>
          </div>
          <div className='desc'>
            <a>Legal Notices</a>
          </div>
          <div className='desc'>
            <a>Cookie Preferences</a>
          </div>
          <div className='desc'>
            <a>Corporate Infomation</a>
          </div>
          <div className='desc'>
            <a>Contact Us</a>
          </div>
        </div>
        <div>
          <button className='btn btn-footer'>Service Code</button>
        </div>
        <div className='copyright'>1997-2024 Netflix, Inc.</div>
      </div>
    </>
  );
};

{
  /* <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-name='Facebook'
              aria-labelledby=':r2:'
              aria-hidden='true'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d={svgFacebook}
                fill='currentColor'
              ></path>
            </svg>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-name='Instagram'
              aria-labelledby=':r3:'
              aria-hidden='true'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d={svgInsta}
                fill='currentColor'
              ></path>
            </svg> */
}
