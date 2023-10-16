import React, { useState, useEffect } from 'react';
import './index.css'

const PasswordManger = () => {
  const initialInput = {
    website: '',
    username: '',
    password: '',
  };

  const [input, setInput] = useState(initialInput);
  const [passwords, setPasswords] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedPasswords = localStorage.getItem('passwords');
    if (storedPasswords) {
      setPasswords(JSON.parse(storedPasswords));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleAddPassword = () => {
    if (input.website && input.username && input.password) {
      setPasswords([...passwords, { ...input }]);
      setInput(initialInput);
    }
  };

  const handleDeletePassword = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
  };

  const filteredPasswords = passwords.filter((password) =>
    password.website.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className='bg-container '>
    <div className="App">
      <header>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          alt="password manager"
        />
      </header>
      <div className="password-manager-container">
        <div className="password-form">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={input.website}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={input.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="add-button-container">
            <button onClick={handleAddPassword}>Add</button>
          </div>
          <div className="show-password-container ">
            <input
              type="checkbox"
              id="showPassword"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword"> Show Password</label>
          </div>
        </div>
        </div>
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        {filteredPasswords.length > 0 ? (
          <ul className="password-list">
            {filteredPasswords.map((password, index) => (
              <li key={index}>
                <div className="password-item">
                  <p className="website">{password.website}</p>
                  <p className="username">{password.username}</p>
                  <p className="password-stars">
                    {showPassword ? password.password : '********'}
                  </p>
                  <button
                    className="delete-button"
                    onClick={() => handleDeletePassword(index)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-passwords-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p>No Passwords</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordManger;
