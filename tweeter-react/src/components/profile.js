import React from 'react';
import './profile.css'

export const Profile = () => {

  return(
    <aside className="headerContainer">
      <header className="profile">
        <div>
          <img src="/profile-hex.png" alt="profile image" />
        </div>
        <br />
        <div>
          <h2>Tyler Bratt</h2>
        </div>
      </header>
    </aside>
  )
}