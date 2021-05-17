import "./AuthenticatedHome.scss"

import React, { useEffect, useReducer, useState } from 'react'
import { beneficiaries, calendarByDistrict, districts, states, } from "../../config/API"
import { locationInitialState, locationReducer } from "../../config/Reducers"

import { AiOutlineUserAdd } from "react-icons/ai"
import { GoInfo } from "react-icons/go"
import { Link } from "react-router-dom"
import NewBenModal from "../../components/Modal/NewBenModal"
import NewSession from "../../components/Modal/NewSession"
import axios from "axios"
import classNames from "classnames"
import moment from "moment"

function AuthenticatedHome({ authState, authDispatch }) {
    let config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authState.token}`,
        }
    }

    const [locationState, locationDispatch] = useReducer(locationReducer, locationInitialState)

    const [stateList, setStateList] = useState(null)
    const [districtList, setDistrictList] = useState(null)
    const [beneficialiesList, setBeneficialiesList] = useState(null)
    const [centersList, setCentersList] = useState(null)
    const [showNewSession, setShowNewSession] = useState(false)
    const [selSession, setSelSession] = useState(null)
    const [showAddBen, setShowAddBen] = useState(false)
    const [newSession, setNewSession] = useState({
        dose: 1,
        session_id: "",
        slot: "09:00AM-11:00AM",
        beneficiaries: []
    })

    const fetchBeneficiaries = async () => {
        axios.get(beneficiaries, config).then(e => setBeneficialiesList(e.data.beneficiaries))
    }

    const fetchStates = async () => {
        axios.get(states, config).then(e => setStateList(e.data.states))
    }

    const fetchDistricts = async (stateID) => {
        locationDispatch({ type: "SET_STATE", payload: { ...locationState, stateID: stateID } })
        axios.get(districts + stateID, config).then(e => setDistrictList(e.data.districts))
    }

    const fetchDistrictData = async (distID) => {
        locationDispatch({ type: "SET_STATE", payload: { ...locationState, districtID: distID } })
        axios.get(calendarByDistrict + `district_id=${distID}&date=${moment().format("DD-MM-YYYY")}`, config).then(e => {
            setCentersList(e.data.centers)
        })
    }

    useEffect(() => {
        fetchStates()
        fetchBeneficiaries()

        locationState.stateID !== null && fetchDistricts(locationState.stateID)
        locationState.districtID !== null && fetchDistrictData(locationState.districtID)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const truncateString = (string, length) => {
        return string.length < length ? string : `${string.slice(0, length - 3)}...`;
    };

    const handleBenArr = (id) => {
        newSession.beneficiaries.includes(id) ? setNewSession({ ...newSession, beneficiaries: newSession.beneficiaries.filter((value, index, arr) => value !== id) }) : setNewSession({ ...newSession, beneficiaries: [...newSession.beneficiaries, id] })
    }

    return (
        <>
            <div className="info">
                <GoInfo className="infoIcon" />
                <span>To book a session you need to head to <Link to="https://selfregistration.cowin.gov.in/">Cowin</Link>
                </span>
            </div>
            <div className="container-min">
                <div className="beneficiaries">
                    <div className="beneficiariesHead">
                        <span>Beneficiaries</span>
                        <AiOutlineUserAdd className="addIcon" onClick={() => setShowAddBen(true)} />
                    </div>
                    <div className="benificiarieList">
                        {beneficialiesList !== undefined && beneficialiesList !== null && beneficialiesList.map((item, index) => {
                            return (<div
                                key={index}
                                className={classNames("benificiarieItem", newSession.beneficiaries.includes(item.beneficiary_reference_id) && "activeCell")}
                                onClick={() => { handleBenArr(item.beneficiary_reference_id) }}>
                                <span>{item.name}</span>
                                <span className="subDetail">{item.birth_year}</span>
                                <div className="vaccinatedUpdate">
                                    <span>{item.vaccination_status}</span>
                                </div>
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
                            return (<option
                                selected={parseInt(locationState.stateID) === parseInt(item.state_id)}
                                key={index}
                                value={item.state_id}>{item.state_name}</option>)
                        })}
                    </select>
                    <select
                        defaultValue={0}
                        onChange={e => fetchDistrictData(e.target.value)}>
                        {(districtList !== undefined && districtList !== null) ? districtList.map((item, index) => {
                            return (<option
                                selected={parseInt(locationState.districtID) === parseInt(item.district_id)}
                                key={index} value={item.district_id}>{item.district_name}</option>)
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
                            // item.sessions[0].session_id
                            return (<tr key={index} onClick={() => {
                                setNewSession({ ...newSession, session_id: item.sessions[0].session_id })
                                setSelSession(item)
                                setShowNewSession(true)
                            }}>
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
                <NewSession show={showNewSession} setShow={setShowNewSession} selSession={selSession} newSession={newSession} setNewSession={setNewSession} config={config} />
            </div>
        </>
    )
}

export default AuthenticatedHome