import React from 'react';
import { useLocation } from 'react-router-dom';

import './Booking.css';

function Booking() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const verifiedPhoneNumber = searchParams.get("phoneNumber");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Disable the submit button to prevent multiple submissions
    event.target.querySelector('button[type="submit"]').setAttribute('disabled', true);

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby2fRvbw8nwoFfVhDewVPgQ6QXxDLmLg-HfeU5ZERhy9FXhJ06QPGEyctqPV_JWtZPh-A/exec', {
            method: 'POST',
            body: JSON.stringify(formObject),
        });

        if (response.ok) {
            console.log('Form data sent successfully!');
            // Reset the form fields
            event.target.reset();
            // Redirect to Otp page
            window.location.href = '/Confirmation';
        } else {
            console.error('Failed to send form data.');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        // Re-enable the submit button after the request is completed
        event.target.querySelector('button[type="submit"]').removeAttribute('disabled');
    }
};



  return (
    <div className="login-root">
      <form className="box-root flex-flex flex-direction--column center-center" style={{ gridArea: 'top / start / 8 / end' }} onSubmit={handleSubmit}>
        <div className="big-box">
          <h1>PLACE YOUR NEW ORDER</h1>
          <div className="box-root flex-flex">
            {/* Sender Details Box */}
            <div className="details-box">
              <h2>Sender Details</h2>
              <div className="row">
                <input type="text" placeholder="Name" required name="senderName" />
                <input type="number" placeholder="Pincode" required name="senderPincode" />
              </div>
              <div className="row">
                <input type="number" placeholder="Phone Number" required name="senderPhoneNumber" defaultValue={verifiedPhoneNumber}  />
                <input type="text" placeholder="City" required name="senderCity" />
              </div>
              <div className="row">
                <input type="email" placeholder="Email" required name="senderEmail" />
                <input type="text" placeholder="State" required name="senderState" />
              </div>
              {/* Address Section */}
              <div className="address-box">
                <label>Address</label>
                <textarea rows="2" name="senderAddress" required></textarea>
              </div>
            </div>
            {/* Receiver Details Box */}
            <div className="details-box">
              <h2>Receiver Details</h2>
              <div className="row">
                <input type="text" placeholder="Name" required name="receiverName" />
                <input type="number" placeholder="Pincode" required name="receiverPincode" />
              </div>
              <div className="row">
                <input type="number" placeholder="Phone Number" required name="receiverPhoneNumber" />
                <input type="text" placeholder="City" required name="receiverCity" />
              </div>
              <div className="row">
                <input type="email" placeholder="Email" required name="receiverEmail" />
                <input type="text" placeholder="State" required name="receiverState" />
              </div>
              {/* Address Section */}
              <div className="address-box">
                <label>Address</label>
                <textarea rows="2" name="receiverAddress" required></textarea>
              </div>
            </div>
          </div>
          <div className="additional-details">
            <div className="row">
              <input type="number" placeholder="Weight" required name="weight" />
              <input type="number" placeholder="Number of Boxes" required name="numberOfBoxes" />
            </div>
            <div className="insurance">
              <label htmlFor="insurance">Insurance:</label>
              <div className="radio-group">
                <label>
                  Yes
                  <input type="radio" id="insuranceYes" name="insurance" value="yes" />
                </label>
                <label>
                  No
                  <input type="radio" id="insuranceNo" name="insurance" value="no" />
                </label>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  );
}

export default Booking;

