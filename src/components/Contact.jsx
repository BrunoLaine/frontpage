import React from 'react';
import { MailIcon } from '@heroicons/react/solid';

export default function Contact() {
  return (
    <section id="contact">
      <div className="text-center mb-20">

        <MailIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Contact info
        </h1>
      </div>
      {/* <div className="h-56 grid grid-cols-3 px-5 py-10 mx-auto
      // flex sm:flex-nowrap flex-wrap content-start:center "> */}
      <div className="flex flex-row flex-wrap space-x-5 justify-center">

        <section className="pv-contact-info__contact-type ci-vanity-url">
          <li-icon aria-hidden="true" type="linkedin-icon" class="pv-contact-info__contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </li-icon>

          <h3 className="pv-contact-info__header t-16 t-black t-bold">
            Linkedin
          </h3>
          <div className="pv-contact-info__ci-container t-14">
            <a href="https://www.linkedin.com/in/bruno-lainé" className="pv-contact-info__contact-link link-without-visited-state t-14">
              linkedin.com/in/bruno-lainé
            </a>
          </div>
        </section>

        <section className="pv-contact-info__contact-type ci-phone">
          <li-icon aria-hidden="true" type="phone-handset-icon" class="pv-contact-info__contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M21.7 19.18l-1.92 1.92a3.07 3.07 0 01-3.33.67 25.52 25.52 0 01-8.59-5.63 25.52 25.52 0 01-5.63-8.59 3.07 3.07 0 01.67-3.33L4.82 2.3a1 1 0 011.41 0l3.15 3.11A1.1 1.1 0 019.41 7L7.59 8.73a20.51 20.51 0 007.68 7.68l1.78-1.79a1.1 1.1 0 011.54 0l3.11 3.11a1 1 0 010 1.41z" />
            </svg>
          </li-icon>

          <h3 className="pv-contact-info__header t-16 t-black t-bold">
            Phone
          </h3>
          <ul className="list-style-none">
            <li className="pv-contact-info__ci-container t-14">
              <span className="t-14 t-black t-normal">
                +33676798872
              </span>
              <span className="t-14 t-black--light t-normal">
                (Home)
              </span>
            </li>
          </ul>
        </section>

        <section className="pv-contact-info__contact-type ci-email">
          <li-icon aria-hidden="true" type="envelope-icon" class="pv-contact-info__contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M2 4v13a3 3 0 003 3h14a3 3 0 003-3V4zm18 2v1.47l-8 5.33-8-5.33V6zm-1 12H5a1 1 0 01-1-1V8.67L12 14l8-5.33V17a1 1 0 01-1 1z" />
            </svg>
          </li-icon>

          <h3 className="pv-contact-info__header t-16 t-black t-bold">
            Email
          </h3>
          <div className="pv-contact-info__ci-container t-14">
            <a href="mailto:bruno.laine94@gmail.com" className="pv-contact-info__contact-link link-without-visited-state t-14" target="_blank" rel="noopener noreferrer">
              bruno.laine94@gmail.com
            </a>
          </div>
        </section>

      </div>
    </section>
  );
}
