import React, { useState } from 'react';
import Navbar from './navbar2';
import Footer from './footer';
import './contact-us.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    timeSlot: '',
    location: '',
    paymentMethod: ''
  });

  const [deleteAccountData, setDeleteAccountData] = useState({
    email: '',
    password: ''
  });

  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteAccountInputChange = (e) => {
    const { name, value } = e.target;
    setDeleteAccountData({ ...deleteAccountData, [name]: value });
  };

  const handleCancel = () => {
    setFormData({ name: '', date: '', timeSlot: '', location: '', paymentMethod: '' });
    setErrorMessage('');
  };

  const handleBookNow = () => {
    const { name, date, timeSlot, location, paymentMethod } = formData;

    if (!name || !date || !timeSlot || !location || !paymentMethod) {
        setErrorMessage('Please fill out all fields!');
        setTimeout(() => setErrorMessage(''), 3000);
        return;
    }

    fetch('http://localhost:8089/api/book-meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'Booking successfully added!') {
                setIsBookingConfirmed(true);
                setTimeout(() => setIsBookingConfirmed(false), 3000);
            } else {
                setErrorMessage(data.message || 'Something went wrong!');
            }
        })
        .catch(() => setErrorMessage('Server error, please try again later!'));
  };

  const handleDeleteAccount = () => {
    const { email, password } = deleteAccountData;

    if (!email || !password) {
        setDeleteMessage('Please provide email and password!');
        setTimeout(() => setDeleteMessage(''), 3000);
        return;
    }

    fetch('http://localhost:8080/api/delete-account', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deleteAccountData),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'Account deleted successfully') {
                setDeleteMessage('Account deleted successfully!');
            } else {
                setDeleteMessage(data.message || 'Error deleting account!');
            }
            setTimeout(() => {
                setDeleteMessage('');
                setShowDeleteModal(false);
            }, 3000);
        })
        .catch(() => {
            setDeleteMessage('Server error, please try again later!');
            setTimeout(() => setDeleteMessage(''), 3000);
        });
  };

  return (
    <div className="initial">
      <div className="contactus">
        <Navbar />
        <h1 className="startname">CONTACT US</h1>
        <div className="booking">
          <h1>Booking Details</h1>
          <form className="booking-form">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeSlot">Time Slot</label>
              <input
                type="text"
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleInputChange}
                placeholder="Ex: 12:00 AM"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter location"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a payment method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
            <div className="form-buttons">
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button type="button" className="book-btn" onClick={handleBookNow}>
                Book Now
              </button>
            </div>
          </form>
                    {/* Error message */}
                    {errorMessage && (
            <div className="error-message">
              <div className="message-content">
                <h2>{errorMessage}</h2>
              </div>
            </div>
          )}
          {/* Confirmation message */}
          {isBookingConfirmed && (
            <div className="confirmation-message">
              <div className="message-content">
                <h2>Booking Confirmed!</h2>
                <p>Thank you for booking. We’ll see you soon!</p>
              </div>
            </div>
          )}
        </div>

        {/* Delete Account Button */}
        <button
          className="delete-account-btn"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete Account
        </button>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Confirm Account Deletion</h2>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={deleteAccountData.email}
                  onChange={handleDeleteAccountInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={deleteAccountData.password}
                  onChange={handleDeleteAccountInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="modal-buttons">
                <button
                  className="cancel-btn"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button className="delete-btn" onClick={handleDeleteAccount}>
                  Confirm Delete
                </button>
              </div>
              {deleteMessage && <p className="message">{deleteMessage}</p>}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
