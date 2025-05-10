import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Organisms/NavBar";
import Sidebar from "../Organisms/Sidebar";
import dayjs from "dayjs";
import WeekView from "../Templates/WeekView";
import NotFound from "./NotFound";
import AccountSettings from "../Templates/AccountSettings";
import Profile from "../Templates/Profile";
import ChangeAvatar from "../Templates/ChangeAvatar";
import AddFriend from "../Templates/AddFriend";

function App() {
  const [NavCurrentMonth, NavSetCurrentMonth] = useState(
    dayjs().format("MMMM YYYY")
  );
  const [SideCurrentMonth, SideSetCurrentMonth] = useState(
    dayjs().format("MMMM YYYY")
  );

  const handleTodayButtonClick = () => {
    const today = dayjs().format("MMMM YYYY");
    NavSetCurrentMonth(today);
    SideSetCurrentMonth(today);
  };

  return (
    <div id="app-container" className="h-screen flex flex-row">
      <Sidebar
        currentMonth={SideCurrentMonth}
        setCurrentMonth={SideSetCurrentMonth}
        onTodayButtonClick={handleTodayButtonClick}
      />

      <Routes>
        <Route
          index
          element={
            <div className="h-screen flex flex-col w-full ">
              <header>
                <Navbar
                  currentMonth={NavCurrentMonth}
                  setCurrentMonth={NavSetCurrentMonth}
                  onTodayButtonClick={handleTodayButtonClick}
                />
              </header>

              <section className="flex justify-center overflow-auto ">
                <WeekView />
              </section>
            </div>
          }
        />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-avatar" element={<ChangeAvatar />} />
        <Route path="/friends" element={<AddFriend />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
