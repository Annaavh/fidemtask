import React, { useState } from "react";
import "./Check.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../../assets/images/calendar.svg";

function Check() {
  const [startDate, setStartDate] = useState(new Date());
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const toggleMinus = () => {
    if (rooms === 1) return;
    setRooms(rooms - 1);
  };
  const toggleAdultsPlus = () => {
    setAdults(adults + 1);
  };
  const toggleAdultsMinus = () => {
    if (adults === 1) return;
    setAdults(adults - 1);
  };
  const togglePlus = () => {
    setRooms(rooms + 1);
  };
  const toggleChildrenMinus = () => {
    if (children === 0) return;
    setChildren(children - 1);
  };
  const toggleChildrenPlus = () => setChildren(children + 1);
  return (
    <div className="check-container">
      <div className="check-boxes">
        <div className="check-in">
          <p>Check In</p>
          <input className="check-input w-[105px]" placeholder="21.02.2022" />
        </div>
        <div className="check-out">
          <p>Check Out</p>
          <div className="flex">
            <DatePicker
              onChange={(e) => setStartDate(e.target.value)}
              style={{ width: "105px" }}
              placeholderText="dd.mm.yyyy"
            />
            <img className="mx-[20px] check-calendar-icon-desktop" src={calendar} />
          </div>
        </div>
        <img className="check-calendar-icon-mobile" src={calendar} />
      </div>
      <div className="check-hr"></div>
      <div className="check-rooms">
        <p>Rooms</p>
        <button onClick={toggleMinus} className="check-btn">
          -
        </button>
        <span className="mx-[5px] w-[22px] h-[25px]">{rooms}</span>
        <button onClick={togglePlus} className="check-btn">
          +
        </button>
      </div>
      <div className="check-adults">
        <p>Adults</p>
        <div>
          <button onClick={toggleAdultsMinus} className="check-btn">
            -
          </button>
          <span className="mx-[5px] w-[22px] h-[25px]">{adults}</span>
          <button onClick={toggleAdultsPlus} className="check-btn">
            +
          </button>
        </div>
      </div>
      <div className="check-children" style={{ borderBottom: "1px solid white" }}>
        <p>Children</p>
        <div>
          <button onClick={toggleChildrenMinus} className="check-btn">
            -
          </button>
          <span className="mx-[5px] w-[22px] h-[25px]">{children}</span>
          <button onClick={toggleChildrenPlus} className="check-btn">
            +
          </button>
        </div>
      </div>
      <div className="check-hr mx-[20px]"></div>
      <button className="check-availability">Check Availability</button>
    </div>
  );
}

export default Check;
