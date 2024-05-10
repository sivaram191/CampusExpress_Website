// Booking.js

import React from 'react';
import './Booking.css';

function Booking() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    const response = await fetch('https://script.google.com/macros/s/AKfycby2fRvbw8nwoFfVhDewVPgQ6QXxDLmLg-HfeU5ZERhy9FXhJ06QPGEyctqPV_JWtZPh-A/exec', {
      method: 'POST',
      body: JSON.stringify(formObject),
    });
    if (response.ok) {
      console.log('Form data sent successfully!');
      // Add any additional logic here, like displaying a success message.
    } else {
      console.error('Failed to send form data.');
      // Add error handling logic here.
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
                <input type="number" placeholder="Phone Number" required name="senderPhoneNumber" />
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
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
              <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
              <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
              <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
              <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
              <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
              <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
              <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
              <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
