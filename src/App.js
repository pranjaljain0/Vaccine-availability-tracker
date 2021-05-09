import React, { useState } from "react"

import { Badge } from '@mantine/core';
import { Table } from '@mantine/core';
import axios from "axios";
import ring from "../src/assets/sound/Ring.mp3"

function App() {
  const [data, setData] = useState(null)
  // {
  //   beneficiaries: ["41371803146720"]
  //   captcha: "Sc3St"
  //   center_id: 694959
  //   dose: 1
  //   session_id: "36ffc77c-4ce3-4191-91e2-d208e8fd72f6"
  //   slot: "09:00AM-11:00AM"
  // }

  // address: "1250 Tulsi Nagar HOSPITAL"
  // block_name: "PHANDA"
  // center_id: 691508
  // district_name: "Bhopal"
  // fee_type: "Free"
  // from: "09:00:00"
  // lat: 23
  // long: 77
  // name: "Navin Girls School 18"
  // pincode: 462003
  // sessions: [{ session_id: "e5d23408-6f8f-461c-ab5c-669a82345998", date: "10-05-2021", available_capacity: 0, … }]
  // state_name: "Madhya Pradesh"
  // to: "17:00:00"

  var audio = new Audio(ring);


  React.useEffect(() => {
    const fetchData = async () => {
      let url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=312&date=09-05-2021"
      axios.get(url, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIyZTM4YjY5OC04Nzk5LTQwODEtOWNkYy1jZGQwMDQzNGMyMTEiLCJ1c2VyX2lkIjoiMmUzOGI2OTgtODc5OS00MDgxLTljZGMtY2RkMDA0MzRjMjExIiwidXNlcl90eXBlIjoiQkVORUZJQ0lBUlkiLCJtb2JpbGVfbnVtYmVyIjo3MDAwNjk5NzQzLCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjQxMzcxODAzMTQ2NzIwLCJzZWNyZXRfa2V5IjoiYjVjYWIxNjctNzk3Ny00ZGYxLTgwMjctYTYzYWExNDRmMDRlIiwidWEiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjkzIFNhZmFyaS81MzcuMzYiLCJkYXRlX21vZGlmaWVkIjoiMjAyMS0wNS0wOVQxMDowMDoyMy4yMjlaIiwiaWF0IjoxNjIwNTU0NDIzLCJleHAiOjE2MjA1NTUzMjN9.EV_Vt9Bg6L72sTUE6lzDlDhpIxdTPwi-JTYTCMfiE8s",
        }
      }).then(e => {
        setData(e.data.centers)
        console.log("fetched")
      }).catch(err => console.error(err))
    }
    setInterval(() => {
      fetchData()
    }, 3000)
  }, [])

  const rows = data !== undefined && data !== null && data !== {} ? data.map((element) => {
    element.sessions[0].available_capacity !== 0 && element.sessions[0].min_age_limit === 18 && audio.play();

    element.sessions[0].available_capacity !== 0 && element.sessions[0].min_age_limit === 18 && element.sessions[0].available_capacity !== 0 && console.warn("Ringing...");
    return (<tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.fee_type}</td>
      <td><Badge color={element.sessions[0].available_capacity !== 0 ? 'blue' : 'teal'} variant="filled">
        {element.sessions[0].available_capacity}
      </Badge></td>
      <td><Badge color={element.sessions[0].min_age_limit === 18 ? 'blue' : 'teal'} variant="filled">
        {element.sessions[0].min_age_limit}
      </Badge></td>
      <td>{element.from}</td>
    </tr>
    )
  }) : (<tr>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>)

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Fee Type</th>
          <th>Availability</th>
          <th>Age</th>
          <th>From</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default App;
