import React  from 'react'
import './App.scss'

function App() {

  return (
    <section className="container row">
        <div className='img_section '> </div>
      {/* <img src="/images/illustration-woman-online-desktop.svg" alt="" />  */}
        <div className='faq_section'>
          <h2>FAQ</h2>
            <button className='dropdown row'>
              <button className='row_arrow'>
                 <h4>How many team members can I invite? </h4>
                <span><img src="/images/icon-arrow-down.svg" /></span>
              </button>
              <div className='dropdown-content'>
                  <p className=''>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. </p>
              </div>
            </button>

            <button className='dropdown row'>
              <button className="div row_arrow">
               <h4> What is the maximum file upload size?</h4>
               <span><img src="/images/icon-arrow-down.svg" /></span>
          </button>
            <div className=" dropdown-content">
               <p>No more than 2GB. All files in your account must fit your allotted storage space. </p>
          </div>
            </button>

            <button className='dropdown row'>
              <button className=" row_arrow">
                <h4> How do I reset my password?</h4>
                <span><img src="/images/icon-arrow-down.svg" /></span>
            </button>
             <div className=" dropdown-content">
                 <p>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. </p>
               </div>
            </button>

            <button className='dropdown row'>
              <button className="row_arrow">
                 <h4>Can I cancel my subscription?</h4>
                  <span><img src="/images/icon-arrow-down.svg" /></span>
              </button>
              <div className=" dropdown-content">
              <p >Yes! Send us a message and we’ll process your request no questions asked. </p>
              </div>
            </button>

            <button className='dropdown row '>
              <button className="row_arrow">
                <h4>Do you provide additional support? </h4>
                  <span><img src="/images/icon-arrow-down.svg" /></span>
               </button>
                <div className="dropdown-content">
                  <p>Chat and email support is available 24/7. Phone lines are open during normal business hours. </p>
              </div>
            </button>

        <button className='dropdown '>
          <button className="row_arrow">
            <h4>Do you provide additional support? </h4>
            <span><img src="/images/icon-arrow-down.svg" /></span>
          </button>
          <div className="dropdown-content">
            <p>Chat and email support is available 24/7. Phone lines are open during normal business hours. </p>
          </div>
        </button>
        </div>
    </section>
  )
}

export default App
