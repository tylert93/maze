const Popup = ({ setShowPopup }) => {
  const handleClick = () => setShowPopup(false);

  return (
    <>
      <div className="popup-background" />
      <div className="popup-container">
        <h1>YOU WON!</h1>
        <button className="btn" onClick={handleClick}>
          Ok
        </button>
      </div>
    </>
  );
};

export default Popup;
