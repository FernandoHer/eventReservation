import React from 'react'
import './rsvp.css'

export const RSVP = () => {

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
                  placeholder="Full Name"  
            />
          </div>
        </div>
        <button type="submit" 
                disabled
                data-testid="guest-search-submit" 
                color="primary" 
                className="buttom-guest" 
                >
                  Find Your Invitation
        </button>
      </form>
    </div>
    
    </>
    
  )
}
