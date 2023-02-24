import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DefaultProfile from "../assets/default_user.png";
import { IoMdPin } from "react-icons/io";
import { AiFillApple } from "react-icons/ai";
import Appstore from "../assets/appstore.png";
import Logo from "../assets/plain.png";

const Event = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const eventId = decodeURI(searchParams.get("eventId"));
  const myAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNH0.Y8e-rpsXznla6u9OCf0cqQB8JzAmGdKFFH_fudz1oI8";
  const apiURL = process.env.REACT_APP_API_URL;
  const [eventInfo, setEventInfo] = useState(null);
  const [guestList, setGuestList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function getEventInfo() {
      axios
        .get(`${apiURL}/event/`, {
          params: { event_id: eventId },
          headers: { Authorization: `Bearer ${myAccessToken}` },
        })
        .then((response) => {
          setEventInfo(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log("GET EVENT INFO ERROR : ", error);
        });
    }

    function getGuestList() {
      axios
        .get(`${apiURL}/event/roster`, {
          params: { event_id: eventId },
          headers: { Authorization: `Bearer ${myAccessToken}` },
        })
        .then((response) => {
          setGuestList(response.data);
        })
        .catch((error) => {
          console.log("GET EVENT INFO ERROR : ", error);
        });
    }

    getEventInfo();
    getGuestList();
    return () => {};
  }, [eventId, apiURL]);

  const TitleText = ({ title }) => (
    <div className="font-poppins font-medium py-1" style={{ color: "#fff" }}>
      {title}
    </div>
  );

  const InfoComponent = () => (
    <div className="mt-2 px-4">
      <div
        style={{ backgroundColor: "#333" }}
        className="flex items-center justify-between rounded-2xl mt-4 px-6 pr-4 py-5 text-white"
      >
        <div className="flex items-center">
          <div className="flex flex-col items-center border-r pr-6 ">
            <p className="font-poppins text-xs">
              {`${moment(eventInfo.event.event_start_at).format("MMM")}`}
            </p>
            <p className="font-poppins text-xl font-medium">
              {`${moment(eventInfo.event.event_start_at).format("D")}`}
            </p>
          </div>
          <div className="ml-6">
            <p className="font-poppins text-xl font-medium">
              {`${moment(eventInfo.event.event_start_at).format("dddd")}`}
            </p>
            <div className="flex items-center">
              <p className="font-poppins text-xs">
                {`${moment(eventInfo.event.event_start_at).format("h:mm a")}`}
              </p>
              <p className="mx-1 text-xs">-</p>
              {moment(eventInfo.event.event_start_at).format("D") ===
              moment(eventInfo.event.event_end_at).format("D") ? (
                <p className="font-poppins text-xs">
                  {`${moment(eventInfo.event.event_end_at).format("h:mm a")}`}
                </p>
              ) : (
                <p className="font-poppins text-xs">
                  {`${moment(eventInfo.event.event_end_at).format(
                    "MMM D h:mm a"
                  )}`}
                </p>
              )}
            </div>
          </div>
        </div>

        <button onClick={() => setShowModal(true)}>
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#555" }}
          >
            <IoMdPin color="#fff" size={22} />
          </div>
        </button>
      </div>

      <div className="mt-3" />
      <TitleText title="About Event" />
      <div className="py-4 rounded-lg mb-4">
        <p className="font-poppins text-gray-300 text-sm">
          {eventInfo.event.event_description}
        </p>
      </div>
      <GuestListComponent />
    </div>
  );

  const GuestListComponent = () => {
    return (
      <div>
        <TitleText
          title={
            guestList.length === 0 ? "GUESTS" : `GUESTS ${guestList.length}`
          }
        />

        <div className="w-full rounded-lg px-4 py-2">
          {guestList.length === 0 ? (
            <div className="flex justify-center py-6">
              <p className="font-poppins text-xs" style={{ color: "#999" }}>
                Be the first one to get a ticket! 🔥
              </p>
            </div>
          ) : (
            guestList.map((item, index) => (
              <button className="w-full h-14 flex items-center" key={index}>
                <img
                  className="w-7 h-7 rounded-full"
                  style={{
                    backgroundColor: "#d9d9d9",
                  }}
                  src={item.user_img ? item.user_img : DefaultProfile}
                  alt=""
                />
                <p className="font-poppins ml-4 text-xs text-white">
                  {item.nickname}
                </p>
              </button>
            ))
          )}
        </div>
      </div>
    );
  };

  const PurchaseButton = () => (
    <button
      className="h-12 px-4 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "#5534eb" }}
      onClick={() => setShowModal(true)}
    >
      <p className="font-poppins font-medium text-white text-sm">
        {`Get a Ticket`}
      </p>
    </button>
  );

  const TicketComponent = () => {
    return (
      <div
        style={{ backgroundColor: "#444" }}
        className="shadow-lg w-full py-4 px-5 rounded-2xl flex items-center justify-between z-50"
      >
        <div className="flex flex-col justify-center">
          <p
            className="font-poppins text-xs w-full"
            style={{ color: "#a5a5a5" }}
          >
            {eventInfo.event.event_max_participants - guestList.length < 1
              ? "UNLIMITED"
              : eventInfo.event.event_max_participants - guestList.length}{" "}
            tickets left
          </p>

          <p className="w-full font-poppins font-medium text-xl mt-1 flex items-center text-white">
            {eventInfo.event.event_price === 0
              ? "FREE"
              : (eventInfo.event.event_price / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
            <p className="text-xs font-poppins ml-1 font-normal mt-1">
              {" "}
              / person
            </p>
          </p>
        </div>

        <PurchaseButton type="About Me" amount={1000} />
      </div>
    );
  };

  const DownloadModal = () => (
    <button
      onClick={() => setShowModal(false)}
      className="absolute w-screen h-full flex bg-black bg-opacity-40 z-20 px-4 py-24"
    >
      <div
        style={{ backgroundColor: "#333" }}
        className="w-full text-white rounded-xl flex flex-col items-center justify-center p-12 py-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xl font-medium">Get Turnup</p>
        <p className="text-xl font-medium">on the App Store</p>
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/curiyus-campus-event-hub/id1661884814"
          rel="noreferrer"
          className="my-4 w-1/2 flex-shrink-0"
        >
          <img src={Appstore} alt="" className="object-contain" />
        </a>
        <p className="text-sm mt-4 text-gray-200">Already have the app?</p>
        <a
          target="_blank"
          href={`com.andrewdhjang.curiyusreactnative://event?eventId=${eventId}`}
          rel="noreferrer"
        >
          <p className="p-2 mt-2 text-sky-400 text-sm font-medium">
            View this event on Turnup →
          </p>
        </a>
      </div>
    </button>
  );

  if (eventInfo)
    return (
      <div
        className="font-poppins min-h-screen h-full relative pb-24"
        style={{ backgroundColor: "#111" }}
      >
        {showModal && <DownloadModal />}
        <div className="flex flex-col relative h-80">
          <img
            src={eventInfo.event.event_img}
            alt=""
            className="w-screen h-full bg-gray-100 border-none object-cover absolute top-0"
            draggable={false}
          />
          <div
            style={{
              backdropFilter: "blur(14px) contrast(90%)",
              WebkitBackdropFilter: "blur(14px) contrast(90%)",
            }}
            className="w-full h-14 flex items-center font-poppins font-medium text-lg px-4 justify-between z-10 flex-shrink-0"
          >
            <button className="flex items-center" onClick={() => navigate("/")}>
              <img src={Logo} className="w-5 h-5 object-contain" draggable={false} alt="" />
              <p className="text-white ml-2">Turnup</p>
            </button>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/curiyus-campus-event-hub/id1661884814"
              rel="noreferrer"
            >
              <button
                className="h-9 px-3 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#33333399" }}
              >
                <AiFillApple color="#fff" />
                <p className="font-poppins font-medium text-white text-xs ml-1">
                  {`Get the app`}
                </p>
              </button>
            </a>
          </div>
          <div
            style={{ background: "linear-gradient(#00000000, #000000C9)" }}
            className="w-full h-full z-10 flex flex-col justify-end p-4"
          >
            <p className="mt-2 text-xl font-medium text-white">
              {eventInfo.event.event_title}
            </p>
            <div className="text-sm mt-4 flex items-center">
              <img
                src={eventInfo.user_img}
                className="w-5 h-5 rounded-full"
                alt=""
              />
              <p className="ml-2 text-white text-xs font-normal">
                {eventInfo.nickname}
              </p>
            </div>
          </div>
        </div>
        <InfoComponent />
        <div className="fixed bottom-3 w-full px-4">
          <div className="w-full">
            <TicketComponent />
          </div>
        </div>
      </div>
    );
};

export default Event;
