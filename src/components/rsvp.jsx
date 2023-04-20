import React, { useState } from 'react'
import './rsvp.css'
import {AiOutlineCalendar} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'

export const RSVP = () => {

  const [fullName, setFullName] = useState("")
  const [guestFound, setGuestFound] = useState([{}])
  const [verifyGuess, setVerifyGuess] = useState(false)
  const [idGuess, setIdGuess] = useState("")
  const [idNameGuess, setIdNameGuess] = useState("")

  const guests = [
    {
      id: 1,
      name: [
        "Juan Herdoiza",
        "Mariela Vivar"
      ]
    },
    {
      id: 2,
      name: [
        "Fernando Herdoiza",
        "Laura Mendoza"
      ]
    },
    {
      id: 3,
      name: [
        "Santiago Avila",
        "Veronica Vivar",
        "Jose Avila",
        "Isabella Avila"
      ]
    },
    {
      id: 4,
      name: [
        "Rigoberto Albornoz"
      ]
    },
  ]



  const searchGuest = (e) => {
    e.preventDefault();
    guests.forEach((guest) => {
      for (const element of guest.name) {
        if (element.toLowerCase().includes(fullName.toLowerCase())) {
          setGuestFound(guest)
          setVerifyGuess(true)
        }
      }
    })
  }

  const acepted = (value,idAccept) => {
    
    const $dataSelectorAccept = document.getElementById(idAccept)
    $dataSelectorAccept.removeAttribute('class') 
    $dataSelectorAccept.setAttribute('class','button-accept')
    
    let idDe = idAccept.slice(6)
    let idDecline = "decline" + idDe
    const $dataSelectorDecline = document.getElementById(idDecline)
    $dataSelectorDecline.removeAttribute('class')
    $dataSelectorDecline.setAttribute('class','button-decline')
   
  }
  const declined = (value,idDecline) => {
      console.log("idDecline", idDecline)
    const $dataSelectorDecline = document.getElementById(idDecline)
    $dataSelectorDecline.removeAttribute('class')
    $dataSelectorDecline.setAttribute('class','button-accept')

    let idAc = idDecline.slice(7)
    let idAccept = "accept" + idAc
    const $dataSelectorAccept = document.getElementById(idAccept)
    $dataSelectorAccept.removeAttribute('class')
    $dataSelectorAccept.setAttribute('class','button-decline')
  
    
  }


  return (
    <>
      <div>
        <div className="header">
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex w-100">
              <h3 className="text-header">RSVP</h3>
            </div>
            <button className="buttom-header">X</button>
          </div>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress">
        </div>
      </div>
      <div className='picture-body'>
        <div className='picture'>
          <picture className="">
            <source media="(min-width: 1280px)"
              srcSet="https://media-api.xogrp.com/images/eb1a463e-0cd2-479b-bf6a-60f01c36583a" />
            <source media="(min-width: 1024px)"
              srcSet="https://media-api.xogrp.com/images/eb1a463e-0cd2-479b-bf6a-60f01c36583a" />
            <source media="(min-width: 768px)"
              srcSet="https://media-api.xogrp.com/images/eb1a463e-0cd2-479b-bf6a-60f01c36583a" />
            <source srcSet="https://media-api.xogrp.com/images/87b3f390-ce7c-4fcc-8a17-178e9ae3cb88" />
            <img src="https://media-api.xogrp.com/images/eb1a463e-0cd2-479b-bf6a-60f01c36583a"
              alt=""
              className="img-back img-fluid img-thumbnail" />
          </picture>
        </div>

        {!verifyGuess
          ? <>
            <div className="names-wedding">
              <h2 data-testid="wedding-name" className="names">Mariela &amp; Juan's Wedding</h2>
              <div className="info-wedding">
                If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group.
              </div>
            </div>
            <form>
              <div className="search-guest">
                <div className="name-guest">
                  <input type="text"
                    className="input-guest"
                    id="wedding"
                    name="fullName"
                    pattern='[a-z]'
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit"
                data-testid="guest-search-submit"
                color="primary"
                className="buttom-guest"
                onClick={(e) => searchGuest(e)}
              >
                Find Your Invitation
              </button>
            </form>
          </>
          : <></>
        }

        {
          verifyGuess
            ?
            <div>

              <div className="css-jtawwa">
                <h2 data-testid="event-title" className="white-party">White Party Cocktail</h2>
                <div data-testid="event-date" className="white-party-items">
                  <span className="white-party-item-span">
                  <AiOutlineCalendar />
                  </span>Thursday, August 10, 2023  at 09:00 PM
                </div>
                <div data-testid="event-location" className="white-party-items">
                  <span className="white-party-item-span">
                    <GrLocation />
                  </span>
                  <div>Casa Firenza Hotel &amp; Suits Boutique
                    <a className="css-5vtfjm">View Full Address</a>
                  </div>
                </div>
                <div data-testid="event-note" className="white-party-items">
                  <span className="white-party-item-span">
                    {/* <svg className="icon--69a8b size-sm--aac4d  css-6wklle ">
                      <use xlink:href="#v2-icon-notes"></use>
                    </svg> */}
                  </span>Casa Firenza Rooftop
                </div>
                <div data-testid="event-attire" className="white-party-items">
                  <span className="white-party-item-span">
                    {/* <svg className="icon--69a8b size-sm--aac4d  css-6wklle ">
                      <use xlink:href="#v2-icon-attire"></use>
                    </svg> */}
                  </span>White Attire Only
                </div>
              </div>
              {
                <ul className='px-2'>
                  {guestFound.name?.map((guest,index) => (
                    <li className='d-flex ' 
                        key={index.toString()}
                        id={index.toString()}
                        >
                      <div className='guest-found'>
                        {guest}
                      </div>
                      
                      <div className="d-flex">
                        <button data-testid="accept" 
                                id={"accept" + guest}
                                className="button-accept" 
                                onClick={() => {
                                  setIdGuess(index)
                                  setIdNameGuess("accept" + guest)
                                  acepted(idGuess,idNameGuess)
                                  }}>
                          <span className="css-7vb7b0">Accepted</span>
                        </button>
                        <button data-testid="reject" 
                                id={"decline" + guest}
                                className="button-decline"
                                onClick={() => {
                                  setIdGuess(index)
                                  setIdNameGuess("decline" + guest)
                                  declined(idGuess,idNameGuess)}}>
                          <span className="css-7vb7b0">Decline</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              }
            </div>


            : <></>
        }




      </div>

    </>

  )
}
