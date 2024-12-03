import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MediLink Pro</title>
        <meta property="og:title" content="Agreeable Ambitious Hummingbird" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#features</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Features</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Schedule Appointment</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Get in Touch</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Learn more about our system and services.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore the features we offer for medical care institutions.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Discover the services we provide for Saudi medical companies.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for inquiries or appointments.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Our system offers cutting-edge solutions for medical care
              institutions in Saudi Arabia, streamlining processes and enhancing
              patient care.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Revolutionizing Medical Care in Saudi Arabia
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Appointments Management</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Virtual Appointments</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Storage Tracking</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Efficiently schedule and organize appointments for patients and
              staff.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Conduct virtual appointments for patients and healthcare
              providers.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Track and manage medical supplies efficiently.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Discover a comprehensive system tailored for medical companies in
              Saudi Arabia. Manage appointments, track storage, and conduct
              virtual consultations seamlessly.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Streamline Your Medical Care Institution
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Appointments Management</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Storage Tracking</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Virtual Appointments</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Efficiently manage appointments for patients and staff
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Track and manage medical inventory and storage efficiently
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Offer virtual consultation services for patients and healthcare
              providers
            </span>
          </Fragment>
        }
      ></Features25>
      
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">Sign up for an account</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">Schedule appointments</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">Track storage and inventory</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">Conduct virtual appointments</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              Create an account on our platform to access all the features and
              services tailored for medical care institutions in Saudi Arabia.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              Efficiently manage appointments for patients, doctors, and staff
              members with our easy-to-use appointment management system.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              Keep track of medical supplies, equipment, and inventory levels to
              ensure smooth operations within your medical facility.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              Enable virtual consultations and appointments for patients and
              healthcare providers, offering convenience and accessibility.
            </span>
          </Fragment>
        }
      ></Steps2>
   
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
       
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Riyadh Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Jeddah Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              123 Main Street, Riyadh, Saudi Arabia
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213">
              456 King Abdulaziz Road, Jeddah, Saudi Arabia
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">Appointments Management</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">Storage Tracking</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">Virtual Appointments</span>
          </Fragment>
        }
    
        termsLink={
          <Fragment>
            <span className="home-text219">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
