import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-upper">
        {/* Search Section */}
        <div className="footer-search">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="email-subscription">
            <input type="email" placeholder="Enter your e-mail..." />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <div className="currency">
            <h4>CURRENCY</h4>
            <p>USD</p>
            <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
          </div>
        </div>
      </div>
      <hr/>

      <div className="footer-lower">
        <div className="footer-column">
          <h4>AMin AKhter</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="#"><img src="https://via.placeholder.com/25/ffffff/ffffff?text=I" alt="Instagram" /></a>
            <a href="#"><img src="https://via.placeholder.com/25/ffffff/ffffff?text=L" alt="LinkedIn" /></a>
          </div>

          <h4>Amin Akhter ACCEPTS</h4>
          <div className="payment-icons-list">
            <img src="https://via.placeholder.com/25" alt="GPay" />
            <img src="https://via.placeholder.com/25" alt="Mastercard" />
            <img src="https://via.placeholder.com/25" alt="American Express" />
            <img src="https://via.placeholder.com/25" alt="Apple Pay" />
            <img src="https://via.placeholder.com/25" alt="PayPal" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Amin AKhter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
