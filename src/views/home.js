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
        <title>Agreeable Ambitious Hummingbird</title>
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
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Standard Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">Starting at 100 SAR/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">Starting at 200 SAR/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">Starting at 300 SAR/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Sign up now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">
              Save 10% with yearly subscription
            </span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Sign up now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">
              Save 15% with yearly subscription
            </span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Sign up now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">
              Save 20% with yearly subscription
            </span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">Appointments management</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">Storage tracking</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">Virtual appointments</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">All features in Basic Plan</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">Advanced reporting</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">Integration with EMR systems</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">All features in Standard Plan</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">Customizable workflows</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">24/7 customer support</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
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
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">
              Excellent system with user-friendly interface.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              Virtual appointments feature has been a game-changer for our
              clinic. Our patients appreciate the convenience and accessibility
              it provides.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              Storage tracking feature has helped us in maintaining accurate
              inventory records and avoiding stock shortages. Highly
              recommended.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              I have been using this system for a while now, and it has
              significantly improved the way I manage my patient appointments.
              The support team is also very responsive.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              The system has greatly improved our efficiency in managing
              appointments and patient records. It has made our workflow
              seamless and more organized.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">Dr. Ahmed Ali</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Dr. Fatima Abdullah</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">Dr. Khalid Hassan</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">Dr. Sara Ahmed</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">Head of Cardiology Department</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">Chief Medical Officer</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">Director of Operations</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">Pediatrician</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
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
        link4={
          <Fragment>
            <span className="home-text217">Link 4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">Link 5</span>
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
