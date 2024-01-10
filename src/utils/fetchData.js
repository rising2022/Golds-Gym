export const exerciseOptions = {
   
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d14c2c118mshefe75c18bb621dfp1c857fjsn151bad426b19',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d14c2c118mshefe75c18bb621dfp1c857fjsn151bad426b19',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
};