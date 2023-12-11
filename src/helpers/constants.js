export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "-38.48546411368675",
    bl_lng: "110.06167261376837",
    tr_lat: "13.771029",
    tr_lng: "154.9737801474667",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "edaff5a258mshca423e8baca570ap14727cjsn8e82ea9fad31",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOpt = {
  headers: {
    "X-RapidAPI-Key": "edaff5a258mshca423e8baca570ap14727cjsn8e82ea9fad31",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
