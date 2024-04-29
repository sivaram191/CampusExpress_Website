import React, { useState, useEffect, useRef } from 'react';
import './Tracking.css';
import timg from "../assets/timg.png";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingDetails, setTrackingDetails] = useState(null);
  const [error, setError] = useState(null);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progressBarClass, setProgressBarClass] = useState('');
  const resultsRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumber = urlParams.get('trackingNumber');
    if (trackingNumber) {
      handleTrackOrder(trackingNumber);
      // Set the tracking number in the state
      setTrackingNumber(trackingNumber);
    }
  }, []);

  useEffect(() => {
    if (trackingDetails) {
      updateProgressBar(trackingDetails.status);
      // Scroll to view results when tracking details are fetched
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [trackingDetails]);

  const updateProgressBar = (status) => {
    switch (status) {
      case 'MANIFESTED':
        setProgressBarClass('manifested');
        break;

      case 'REACH_DESTINATION':
        setProgressBarClass('left-origin');
        break;

      case 'UNDEL_REATTEMPT':
        setProgressBarClass('left-origin');
        break;
      case 'LEFT_ORIGIN':
        setProgressBarClass('left-origin');
        break;
      case 'OFD':
        setProgressBarClass('out-of-delivery');
        break;
      case 'DELIVERED':
        setProgressBarClass('delivered');
        break;
      default:
        setProgressBarClass('can');
        break;
    }
  };

  const handleTrackOrder = (trackingNumber) => {
    setShowProgressBar(true);
    fetch(`https://btob.api.delhivery.com/v2/track/${trackingNumber}`)
      .then(response => response.json())
      .then(data => {
        setTrackingDetails(data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching tracking details:', error);
        setError('Error fetching tracking details. Please try again.');
        setTrackingDetails(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTrackOrder(trackingNumber);
  };

  return (
    <div className="tracking-container">
      
      <div className="timage-container">
      <h1 className="tadd">Welcome To Campus Express Tracking Page</h1>
        <img src={timg} alt="Tracking" className="independent-image" />
      </div>
      <div className="ttext-container">
        <h2 className="tmain-heading">TRACK YOUR ORDER NOW</h2>
        <p className="tsub-heading">Your Shortcut to Instant Shipment Updates!</p>
        <form onSubmit={handleSubmit}>
          <div className="tbox-container">
            <h3 className="tbox-line">_____________________________________________</h3>
            <h3 className="tbox-heading">Track Your Order</h3>
            <h4 className="tbox-subheading">LRN Number:</h4>
            <input
              type="text"
              className="tracking-input"
              style={{
                textAlign: "center",
              }}
              placeholder=" Enter Tracking Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button className="track-button" type="submit">
              TRACK ORDER
            </button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
        {showProgressBar && trackingDetails && (
          <div className="tracking-details" ref={resultsRef}>
            <h3>Tracking Details:</h3>
            <div className="wrapper">
              <div className="margin-area">
                <div className={`dotone ${progressBarClass}`}>1</div>
                <div className={`dottwo ${progressBarClass}`}>2</div>
                <div className={`dotthree ${progressBarClass}`}>3</div>
                <div className={`dotfour ${progressBarClass}`}>4</div>
                <div className={`progress-barfirst ${progressBarClass}`}></div>
                <div className={`progress-barsecond ${progressBarClass}`}></div>
                <div className={`progress-barthird ${progressBarClass}`}></div>
                <div className="message message-1">Picked up</div>
                <div className="message message-2">In-Transit</div>
                <div className="message message-3">Out for delivery</div>
                <div className="message message-4">Delivered</div>
              </div>
            </div>
            <table>
              <tbody>
              <tr>
                <td>Status:  {trackingDetails.status}</td>
                <td>Origin City:  {trackingDetails.origin_city}</td>
                <td>Destination City:  {trackingDetails.destination_city}</td>
                
              </tr>
              <tr>
                <td>LR Number:  {trackingDetails.lrnum}</td>
                <td>Count:  {trackingDetails.count}</td>
                <td>Location:  {trackingDetails.location}</td>
              </tr>
              <tr>
                <td>Timestamp:  {trackingDetails.timestamp}</td>
                <td>Scan Remark:  {trackingDetails.scan_remark}</td>
                <td>MWBN:  {trackingDetails.mwbn}</td>
              </tr>
              <tr>
                <td>Pickup Date:  {trackingDetails.pickup_date}</td>
                <td>Manifested Date:  {trackingDetails.manifested_date}</td>
                <td>Delivered Date:  {trackingDetails.delivered_date}</td>
              </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tracking;
