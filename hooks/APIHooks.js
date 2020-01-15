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
export { getAllMedia };
