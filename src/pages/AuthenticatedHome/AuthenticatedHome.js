import "./AuthenticatedHome.scss"

import React, { useEffect, useState } from 'react'
import { beneficiaries, calendarByDistrict, districts, states, } from "../../config/API"

import { AiOutlineUserAdd } from "react-icons/ai"
import NewBenModal from "../../components/Modal/NewBenModal"
import axios from "axios"
import classNames from "classnames"
import moment from "moment"

function AuthenticatedHome({ state, dispatch }) {
    let config = {
        headers: {
            Authorization: `Bearer ${state.token}`,
        }
    }
    const [stateList, setStateList] = useState(null)
    const [districtList, setDistrictList] = useState(null)
    const [beneficialiesList, setBeneficialiesList] = useState(null)
    const [centersList, setCentersList] = useState(null)
    const [selUsers, setSelUsers] = useState([])

    const [showAddBen, setShowAddBen] = useState(false)

    const fetchBeneficiaries = async () => {
        axios.get(beneficiaries, config).then(e => setBeneficialiesList(e.data.beneficiaries))
    }

    const fetchStates = async () => {
        axios.get(states, config).then(e => setStateList(e.data.states))
    }

    const fetchDistricts = async (stateID) => {
        axios.get(districts + stateID, config).then(e => setDistrictList(e.data.districts))
    }

    const fetchDistrictData = async (distID) => {
        axios.get(calendarByDistrict + `district_id=${distID}&date=${moment().format("DD-MM-YYYY")}&vaccine=COVAXIN`, config).then(e => setCentersList(e.data.centers))
    }

    useEffect(() => {
        fetchStates()
        fetchBeneficiaries()
    }, [])

    // const getIDName = (id) => {
    //     IDTypes !== undefined && IDTypes !== null && IDTypes.map((item, index) => {
    //         item.id === id && console.log(item)
    //     })
    // }

    const truncateString = (string, length) => {
        return string.length < length ? string : `${string.slice(0, length - 3)}...`;
    };

    return (
        <div className="container-min">
            <div className="benificiaries">
                <div className="benificiariesHead">
                    <span>Benificiaries</span>
                    <AiOutlineUserAdd className="addIcon" onClick={() => setShowAddBen(true)} />
                </div>
                <div className="benificiarieList">
                    {beneficialiesList !== undefined && beneficialiesList !== null && beneficialiesList.map((item, index) => {
                        return (<div key={index} className={classNames("benificiarieItem",)} >
                            {/* beneficiary_reference_id */}
                            <span>{item.name}</span>
                        </div>)
                    })}
                </div>
            </div>
            <div className="selectors">
                <select
                    defaultValue={0}
                    onChange={e => fetchDistricts(e.target.value)}>
                    <option value={0} disabled>Select One</option>
                    {stateList !== undefined && stateList !== null && stateList.map((item, index) => {
                        return (<option key={index} value={item.state_id}>{item.state_name}</option>)
                    })}
                </select>
                <select
                    defaultValue={0}
                    onChange={e => fetchDistrictData(e.target.value)}>
                    {(districtList !== undefined && districtList !== null) ? districtList.map((item, index) => {
                        return (<option key={index} value={item.district_id}>{item.district_name}</option>)
                    }) : <option disabled value={0}>Select State</option>}
                </select>
            </div>
            <div className="dataTable">
                <table>
                    <tr>
                        <th className="headcol">Center</th>
                        <th>Min Age</th>
                        <th>Availability</th>
                        <th>pincode</th>
                        <th>block</th>
                        <th>vaccine</th>
                    </tr>
                    {centersList !== undefined && centersList !== null && centersList.map((item, index) => {
                        return (<tr key={index}>
                            <td className="headcol">{truncateString(item.name, 20)}</td>
                            <td className="center">{item.sessions[0].min_age_limit}</td>
                            <td className="center">{item.sessions[0].available_capacity}</td>
                            <td className="center">{item.pincode}</td>
                            <td className="center">{item.block_name}</td>
                            <td>{item.sessions[0].vaccine}</td>
                        </tr>)
                    })}
                </table>
            </div>
            <NewBenModal showAddBen={showAddBen} setShowAddBen={setShowAddBen} config={config} />
        </div>
    )
}

export default AuthenticatedHome
// {
//     "beneficiary_reference_id": "41371803146720",
//     "name": "Pranjal Jain",
//     "birth_year": "1997",
//     "gender": "Male",
//     "mobile_number": "9743",
//     "photo_id_type": 1,
//     "photo_id_number": "********3405",
//     "comorbidity_ind": "N",
//     "vaccination_status": "Partially Vaccinated",
//     "vaccine": "COVAXIN",
//     "dose1_date": "12-05-2021",
//     "dose2_date": "",
//     "appointments": [
//         {
//             "appointment_id": "d3397f86-4e07-4ad9-9dc1-b265d38dfe01",
//             "center_id": 695667,
//             "name": "Imperiol HSS Itwara18",
//             "state_name": "Madhya Pradesh",
//             "district_name": "Bhopal",
//             "block_name": "PHANDA",
//             "from": "09:00",
//             "to": "17:00",
//             "dose": 1,
//             "session_id": "269ce29f-5f78-4ad7-8891-32dc1c947786",
//             "date": "12-05-2021",
//             "slot": "09:00AM-11:00AM"
//         }
//     ]
// }

// {
//     "center_id": 691691,
//     "name": "Govt H.S.S No 2 Bhind COVAXIN",
//     "address": "Govt H.S.S No 2 Bhind COVAXIN",
//     "state_name": "Madhya Pradesh",
//     "district_name": "Bhind",
//     "block_name": "Bhind",
//     "pincode": 477001,
//     "lat": 26,
//     "long": 78,
//     "from": "09:00:00",
//     "to": "18:00:00",
//     "fee_type": "Free",
//     "sessions": [
//         {
//             "session_id": "3f4f10f8-4e9a-49af-ad21-1cd1145a598b",
//             "date": "15-05-2021",
//             "available_capacity": 0,
//             "min_age_limit": 45,
//             "vaccine": "COVAXIN",
//             "slots": [
//                 "09:00AM-11:00AM",
//                 "11:00AM-01:00PM",
//                 "01:00PM-03:00PM",
//                 "03:00PM-06:00PM"
//             ]
//         }
//     ]
// }