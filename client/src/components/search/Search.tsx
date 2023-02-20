import './search.scss';
import React, { useEffect } from 'react';
import { Search } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import Table from './Table';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/api/users?username=${query}`);
      //http://localhost:3000/api/users?username=Leon
      setData(res.data);
    };
    fetchUsers();
  }, []);

  console.log(query);
  // console.log(
  //   user.filter((user: any) => user.username.toLowerCase().includes('leo'))
  // );
  return (
    <>
      <div className="searchbar">
        <Search className="searchIcon" />
        <input
          placeholder="Search for friend, post or video"
          className="searchInput"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </div>
      {/* <Table data={data} /> */}

    </>
  );
}
