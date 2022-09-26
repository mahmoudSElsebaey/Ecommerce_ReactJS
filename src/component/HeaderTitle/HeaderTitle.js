import "./HeaderTitle.css";
function HeaderTitle() {
  return (
    <>
      <div className="header-title-parent">
        <div className="container header-title">
          <div className="phone-conatct">
            <span>
              <i className="fas fa-phone-volume"></i> 5486357
            </span>
            /
            <span>
              <i className="fas fa-mobile-alt"></i> 01201101099
            </span>
          </div>
          <div className="social-conatct-icons ">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-google"></i>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTitle;
