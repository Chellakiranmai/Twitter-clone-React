import React from 'react'

export default function Leftbar() {
  return (
   
    <div className="layout">
      <div className="layout__left-sidebar">
        <img src="logo.png" className="brand" />
        <div className="sidebar-menu">
          <div className="sidebar-menu__item sidebar-menu__item--active">
            <img src="home.png" className="sidebar-menu__item-icon" />
            Home
          </div>
          <div className="sidebar-menu__item">
            <img src="explore.png" className="sidebar-menu__item-icon" />
            Explore
          </div>

          <div className="sidebar-menu__item">
            <img
              src="notification.png"
              className="sidebar-menu__item-icon"
            />
            Notifications
          </div>

          <div className="sidebar-menu__item">
            <img src="messages.png" className="sidebar-menu__item-icon" />
            Messages
          </div>

          <div className="sidebar-menu__item">
            <img src="profile.png" className="sidebar-menu__item-icon" />
            Profile
          </div>

          <div className="sidebar-menu__item">
            <img src="more.png" className="sidebar-menu__item-icon" />
            More
          </div>
        </div>
      </div>
    </div>
  )
}