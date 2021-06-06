import React from "react";
import "./PopUp.scss";
export default function PopUp({
  content,
  open,
  handleOpenPopUp,
  goBack,
  redirect,
}) {
  //   const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div className="popUpBox">
          <div className="popUp">
            <div className="popUpImg">
              <img
                src={
                  require("../../assets/images/Post-notification.png").default
                }
                alt=""
              />
            </div>
            <div className="popUpContent text-center">{content}</div>
            <div className="popUpButton text-center">
              <button
                onClick={() => {
                  if (redirect) {
                    handleOpenPopUp(false);
                    goBack();
                  } else {
                    handleOpenPopUp(false);
                  }
                }}
                className="btnPopUp btn"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
