import './myAccount.scss';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import React, {useRef, useState} from "react";
import {Cancel, PermMedia} from "@mui/icons-material";
import {AuthContext} from "../../context/AuthContext";
import {UserContext} from "../../static/types";
import axios from "axios";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export default function MyAccount(): JSX.Element {
  const username = React.useRef<HTMLInputElement>(null);
  const emailAddress = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);
  const city = React.useRef<HTMLInputElement>(null);
  const from = React.useRef<HTMLInputElement>(null);
  const relationship = React.useRef<HTMLInputElement>(null);
  const {user} = React.useContext(AuthContext) as UserContext;
  const desc = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileCover, setFileCover] = useState<File | null>(null);

  const submitHandler = async (e: React.FormEvent) => {

    // console.log(username?.current?.value);
    // console.log(emailAddress?.current.value);
    // console.log(password?.current.value);
    // console.log(desc.value);
    // console.log(city.value);
    // console.log(from.value);
    // console.log(relationship.value);
    e.preventDefault();
    const updatedUser = {
      username: username,
      email: emailAddress,
      password: password,
      profilePicture: '',
      coverPicture: '',
      desc: desc,
      city: city,
      from: from,
      relationship: relationship,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      updatedUser.profilePicture = fileName;
      try {
        await axios.post('/api/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    if (fileCover) {
      const data = new FormData();
      const fileName = Date.now() + fileCover.name;
      data.append('name', fileName);
      data.append('file', fileCover);
      updatedUser.coverPicture = fileName;
      try {
        await axios.post('/api/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.put(`/api/${user?._id}`, updatedUser);
      window.location.reload();
      console.log('Update sucs');
    } catch (error) {
      console.log(error);
    }
  };

  const currencies = [
    {
      value: '1',
      label: 'Single',
    },
    {
      value: '2',
      label: 'Married',
    },
    {
      value: '0',
      label: '',
    },
  ];

  return (
    <>
      <Header/>
      <div className="my-account">
        <Sidebar/>
        <div className="myAccountBlock">
          <form className="editProfileForm" onSubmit={submitHandler}>
            <h2 className='accountTitle'>My account</h2>
            <TextField id="outlined-required"
                       className='textField'
                       required
                       fullWidth
                       ref={username}
                       placeholder="Enter your name"
                       label="Name"
                       variant="outlined"
            />
            <TextField id="outlined-required"
                       className='textField'
                       required
                       fullWidth
                       ref={emailAddress}
                       placeholder="Enter your email"
                       label="E-mail"
                       variant="outlined"
            />
            <TextField id="outlined-required"
                       className='textField'
                       fullWidth
                       ref={password}
                       placeholder="Enter your password"
                       label="Password"
                       variant="outlined"
            />
            <TextField id="outlined-required"
                       className='textField'
                       placeholder="Enter your description"
                       ref={desc}
                       fullWidth
                       label="Description"
                       variant="outlined"
            />
            <TextField id="outlined-required"
                       className='textField'
                       placeholder="Enter city"
                       type="text"
                       ref={city}
                       fullWidth
                       label="City"
                       variant="outlined"
            />
            <TextField id='outlined-required'
                       className='textField'
                       fullWidth
                       ref={from}
                       placeholder='Where are you from'
                       label='From'
                       variant='outlined'
            />
            <TextField className='textField'
                       id="outlined-select-currency"
                       select
                       fullWidth
                       label="Relationship"
                       defaultValue="0"
                       helperText="Please select your relationship"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          {file && (
            <div className="imgContainer">
              <img
                className="fileImg"
                src={URL.createObjectURL(file)}
                alt="profile picture"
              />
              <Cancel className="cancelImg" onClick={() => setFile(null)}/>
            </div>
          )}

          <div className="options">
            <label htmlFor="file" className="option">
              <PermMedia htmlColor="tomato" className="icon"/>
              <span className="optionText">Profile photo</span>
              <input
                style={{display: 'none'}}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (!e.target.files) return;
                  setFile(e.target.files[0]);
                }}
              />
            </label>
          </div>

            {fileCover && (
              <div className="imgContainer">
                <img
                  className="fileImg"
                  src={URL.createObjectURL(fileCover)}
                  alt="cover picture"
                />
                <Cancel className="cancelImg" onClick={() => setFileCover(null)}/>
              </div>
            )}

            <div className="options">
              <label htmlFor="fileCover" className="option">
                <PermMedia htmlColor="tomato" className="icon"/>
                <span className="optionText">Cover photo</span>
                <input
                  style={{display: 'none'}}
                  type="file"
                  id="fileCover"
                  accept=".png, .jpeg, .jpg"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!e.target.files) return;
                    setFileCover(e.target.files[0]);
                  }}
                />
              </label>
            </div>

            <button className="buttonSave button" type="submit">
              Edit profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
