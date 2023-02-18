import './myAccount.scss';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import React, { useEffect, useState, useContext } from 'react';
import { Cancel, PermMedia } from '@mui/icons-material';
import { IUser } from '../../static/types';
import axios from 'axios';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { type Dispatch } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { IUpdateUser } from '../../static/types';

export default function MyAccount(): JSX.Element {
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState<IUser>(Object);
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  // const {user} = React.useContext(AuthContext) as UserContext;
  const [userName, setUserName] = React.useState<string | null>(user.username);
  const [emailAddress, setEmailAddress] = React.useState<string | null>(
    user.email
  );
  const [password, setPassword] = React.useState<string | null>(null);
  const [city, setCity] = React.useState<string | null>(user?.city!);
  const [from, setFrom] = React.useState<string | null>(user?.from!);
  const [desc, setDesc] = React.useState<string | null>(user?.desc!);
  const [relationship, setRelationship] = React.useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileCover, setFileCover] = useState<File | null>(null);
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      userId: user?._id,
      username: username,
      email: emailAddress,
      password: password,
      profilePicture: user?.profilePicture,
      coverPicture: user?.coverPicture,
      desc: desc,
      city: city,
      from: from,
      relationship: Number(relationship),
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
      const updateUser = async (
        updatedUser: IUpdateUser,
        dispatch: Dispatch<any>
      ) => {
        // Update user info
        await axios.put(`/api/users/${user?._id}`, updatedUser);
        const fetchUser = async () => {
          const res = await axios.get(`/api/users?username=${username}`);
          dispatch({ type: 'UPDATE_USER', payload: res.data });
        };
        fetchUser();
      };
      // @ts-ignore
      updateUser(updatedUser, dispatch);
      navigate(`/profile/${username}`);
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
      label: '-',
    },
  ];

  return (
    <>
      <Header />
      <div className="my-account">
        <Sidebar />
        <div className="myAccountBlock">
          <form className="editProfileForm" onSubmit={submitHandler}>
            <h2 className="accountTitle">My account</h2>
            <TextField
              id="outlined-controlled"
              className="textField"
              required
              fullWidth
              value={userName}
              placeholder="Enter your name"
              label="Name"
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              className="textField"
              required
              fullWidth
              value={emailAddress}
              placeholder="Enter your email"
              label="E-mail"
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmailAddress(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              className="textField"
              fullWidth
              value={
                password === null || password === undefined ? '' : password
              }
              placeholder="Enter your password"
              label="Password"
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              className="textField"
              placeholder="Enter your description"
              value={desc === null || desc === undefined ? '' : desc}
              fullWidth
              label="Description"
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDesc(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              className="textField"
              placeholder="Enter city"
              type="text"
              value={city === null || city === undefined ? '' : city}
              fullWidth
              label="City"
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCity(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              className="textField"
              fullWidth
              value={from === null || from === undefined ? '' : from}
              placeholder="Where are you from"
              label="From"
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFrom(event.target.value);
              }}
            />
            <TextField
              className="textField"
              id="outlined-select-currency"
              select
              fullWidth
              label="Relationship"
              defaultValue="0"
              helperText="Please select your relationship"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setRelationship(event.target.value);
              }}
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
                <Cancel className="cancelImg" onClick={() => setFile(null)} />
              </div>
            )}

            <div className="options">
              <label htmlFor="file" className="option">
                <PermMedia htmlColor="tomato" className="icon" />
                <span className="optionText">Profile photo</span>
                <input
                  style={{ display: 'none' }}
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
                <Cancel
                  className="cancelImg"
                  onClick={() => setFileCover(null)}
                />
              </div>
            )}

            <div className="options">
              <label htmlFor="fileCover" className="option">
                <PermMedia htmlColor="tomato" className="icon" />
                <span className="optionText">Cover photo</span>
                <input
                  style={{ display: 'none' }}
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
