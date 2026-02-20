import React from "react";
import useAuthenStore from "../store/useAuthenStore";

const Header = () => {
  const { authUser } = useAuthenStore();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                authUser ?
                <li>
                  <a>Logout</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
                :
                <li>
                  <a>Login</a>
                </li>
                <li>
                  <a>signUp</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
