import React from 'react';
import './faq.css';
import Navbar from './navbar2';
import Footer from './footer';

function FAQPage() {
  return (
    <div className="faq-page">
      <header className="faq-header">
        <Navbar/>
        <h1>FAQ</h1>
        <p>
        Your questions, answered! Explore our most commonly asked questions to <br />
        learn more about our services, processes, and how we bring your vision to life.
        </p>
      </header>
      <div className="faq-container">
        <section className="faq-section">
          <h2> QUESTION ANSWER
          TRENDING WEEKLY</h2>
          <p>Trending Weekly</p>
          <details>
            <summary>How long day needed?</summary>
            <p>It usually takes around 2-3 days.</p>
          </details>
          <details>
            <summary>How to claim insurance?</summary>
            <p>You can claim insurance by submitting the required documents online.</p>
          </details>
          <details>
            <summary>Can I request people working overtime?</summary>
            <p>Yes, you can request available workers only if you pay them.</p>
          </details>
        </section>
        <section className="faq-section">
          <h2> USUALLY ASKED 
          QUESTION CLIENTS</h2>
          <p>Usually Asked Questions</p>
          <details>
            <summary>Where I get meeting day?</summary>
            <p>Meeting days are on Mondays and Wednesdays.</p>
          </details>
          <details>
            <summary>Can Nestrix pick me to office?</summary>
            <p>Yes, Homco provides office transport.</p>
          </details>
          <details>
            <summary>Can I credit this price?</summary>
            <p>Yes, the credit option is available.</p>
          </details>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default FAQPage;
