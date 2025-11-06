import React, { useState } from 'react';
import './intro.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

const LoginModal = ({
  showLogin,
  showSignup,
  handleCloseModal,
  handleLoginSubmit,
  handleSignupClick,
  handleLoginClick,
  handleForgotPasswordClick,
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username) {
      alert('Please enter your username.');
      return;
    }
    handleLoginSubmit(username, password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!validator.isEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    try {
        // Make the signup API call
        const response = await fetch('http://localhost:8080/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // If signup is successful, close the modal and reset inputs
            console.log('Signup successful:', data);
            alert('Signup successful! You can now log in.');
            handleCloseModal();
        } else {
            // Show the error message returned by the server
            alert(data.message || 'Signup failed. Please try again.');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred during signup. Please try again later.');
    }
};

  return (
    <div>
      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">
                Login
              </button>
              <p className="forgot-password-link">
                <span onClick={handleForgotPasswordClick}>Reset Password?</span>
              </p>
            </form>
            <p className="modal-link">
              Don't have an account?{' '}
              <span onClick={handleSignupClick} className="blue-link">
                Sign Up
              </span>
            </p>
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </form>
            <p className="modal-link">
              Already have an account?{' '}
              <span onClick={handleLoginClick} className="blue-link">
                Login
              </span>
            </p>
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const PasswordResetModal = ({
  showPasswordReset,
  handleCloseModal,
  handleLoginClick,
  handlePasswordResetSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!validator.isEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert('New passwords do not match.');
      return;
    }

    try {
      // Make the password reset API call
      const response = await fetch('http://localhost:8080/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          oldPassword, 
          newPassword 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If password reset is successful
        console.log('Password reset successful:', data);
        alert('Password updated successfully!');
        handleCloseModal();
      } else {
        // Show the error message returned by the server
        alert(data.message || 'Password reset failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    showPasswordReset && (
      <div className="modal-overlay" onClick={handleCloseModal}>
        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
          <h2>Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label>Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
            <button type="submit" className="submit-button">
              Reset Password
            </button>
            <p className="forgot-password-link">
                <span onClick={handleLoginClick}>Back to Login</span>
              </p>
          </form>
          <button className="close-button" onClick={handleCloseModal}>
            X
          </button>
        </div>
      </div>
    )
  );
};

// IntroPage Component
function IntroPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignup(false);
    setShowPasswordReset(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLoginModal(false);
    setShowPasswordReset(false);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowSignup(false);
    setShowPasswordReset(false);
  };

  const handleLoginSubmit = async (username, password) => {
    try {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login successful:', data);
            navigate('/home', { state: { username } });
        } else {
            alert(data.message); // Show server error message
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};

  const handleForgotPasswordClick = () => {
    setShowLoginModal(false);
    setShowSignup(false);
    setShowPasswordReset(true);
  };

  const handlePasswordResetSubmit = async (email, oldPassword, newPassword) => {
    try {
      const response = await fetch('http://localhost:8080/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, oldPassword, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Password reset successful:', data);
        alert('Password updated successfully!');
        handleCloseModal(); // Close the modal after success
      } else {
        alert(data.message || 'Password reset failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="intro-container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nestrix
      </motion.h1>
      <motion.h2
        className="subtitle"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Your trusted platform for home design
      </motion.h2>
      <div className="intro-buttons">
        <button className='btn1' onClick={handleLoginClick}>Login</button>
        <button className='btn2' onClick={handleSignupClick}>Sign Up</button>
      </div>

      {/* Render LoginModal */}
      <LoginModal
        showLogin={showLoginModal}
        showSignup={showSignup}
        handleCloseModal={handleCloseModal}
        handleLoginSubmit={handleLoginSubmit}
        handleSignupClick={handleSignupClick}
        handleLoginClick={handleLoginClick}
        handleForgotPasswordClick={handleForgotPasswordClick}
        />
        <PasswordResetModal
       showPasswordReset={showPasswordReset}
        handleCloseModal={handleCloseModal}
        handleLoginClick={handleLoginClick}
        handlePasswordResetSubmit={handlePasswordResetSubmit}
      />
    </div>
  );
}

export default IntroPage;
