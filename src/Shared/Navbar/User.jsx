import React from 'react';

const User = () => {
    return (
      <div className="dropdown success">
        <label className="btn solid" tabIndex="0">
          With Divider
        </label>
        <div className="menu bottom">
          <a className="item text-sm">Profile</a>
          <div className="is-divider" role="separator"></div>
          <p className="subtitle">Settings</p>
          <a className="item text-sm" tabIndex="-1">
            Account settings
          </a>
          <a className="item text-sm" tabIndex="-1">
            Subscriptions
          </a>
        </div>
      </div>
    );
};

export default User;