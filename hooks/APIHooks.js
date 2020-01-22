import { useState, useEffect } from "react";

const apiUrl = "http://media.mw.metropolia.fi/wbma/";

const getAllMedia = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async() => {

    try {
    const response = await fetch(apiUrl + 'media/all');
    const json = await response.json();


    const result = await Promise.all(json.files.map(async (item) => {
      const tnresponse = await fetch(apiUrl + 'media/'+ item.file_id);
      return await tnresponse.json();
    }));

    console.log('apihooks', result);


    setData(result);
    setLoading(false);
    }catch(e){
      console.log('error', e.message);

    }
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}

const login = async (user, pass) => {

  const data = {
    username: user,
    password: pass,
  };


  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
   body: JSON.stringify(data),
  };


    try {
    const response = await fetch(apiUrl + 'login', fetchOptions);
    const json = await response.json();
    return json;
    } catch(e){
      console.log('error',e.message);
    }
  };



  const register = async (user,full, pass, ema) => {

    const data = {
      username: user,
      full_name: full,
      password: pass,
      email: ema,
    };


    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify(data),
    };


      try {
      const response = await fetch(apiUrl + 'users', fetchOptions);
      const json = await response.json();
      return json;
      } catch(e){
        console.log('error',e.message);
      }
    };



export { getAllMedia, login, register };
