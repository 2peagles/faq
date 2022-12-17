import React  from 'react'
import './App.scss'

function App() {

  return (
    <section className="container row">
        <div className='img_section'> </div>
      {/* <img src="/images/illustration-woman-online-desktop.svg" alt="" />  */}
        <div className='faq_section'>
          <h1>FAQ</h1>
            <div className='dropdown '>
                <h4>How many team members can I invite? <span><img src="/images/icon-arrow-down.svg"/></span></h4>
                  <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. </p>
            </div>

            <div className='dropdown'>
               <h4> What is the maximum file upload size? <span><img src="/images/icon-arrow-down.svg" /></span></h4>
               <p>No more than 2GB. All files in your account must fit your allotted storage space. </p>
            </div>

            <div className='dropdown '>
              <h4> How do I reset my password?<span><img src="/images/icon-arrow-down.svg" /></span></h4>
              <p>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. </p>
            </div>

            <div className='dropdown '>
              <h4>Can I cancel my subscription? <span><img src="/images/icon-arrow-down.svg" /></span></h4>
              <p>Yes! Send us a message and we’ll process your request no questions asked. </p>
            </div>

            <div className='dropdown'>
              <h4>Do you provide additional support?  <span><img src="/images/icon-arrow-down.svg" /></span></h4>
              <p>Chat and email support is available 24/7. Phone lines are open during normal business hours. </p>
          </div>
        </div>
    </section>
  )
}

export default App
