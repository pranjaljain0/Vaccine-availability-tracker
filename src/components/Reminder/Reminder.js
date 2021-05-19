import "./Reminder.scss"

import { BsCheck, BsDash } from "react-icons/bs"
import React, { useEffect, useReducer, useState } from 'react'
import { calendarByDistrict, districts, states } from "../../config/API"
import { showNotifInitialState, showNotificationReducer } from "../../config/Reducers"

import axios from "axios"
import classNames from "classnames"
import moment from "moment"

function Reminder() {
    let localNotifData = JSON.parse(localStorage.getItem("notificationPayload"))
    const [showNotifState, showNotifDispatch] = useReducer(showNotificationReducer, showNotifInitialState)

    const [stateList, setStateList] = useState(null)
    const [districtList, setDistrictList] = useState(null)

    useEffect(() => {
        fetchStates()
        Notification.requestPermission(function (status) {
            console.log('Notification permission status:', status);
            showNotifDispatch({ type: "SET_PERMISSION", payload: { ...localNotifData, userPermission: status, } })
            // default|| granted || denied
        });
        showNotifState.stateID !== null && fetchDistricts(showNotifState.stateID)
    }, [])

    const fetchStates = async () => {
        axios.get(states,).then(e => setStateList(e.data.states))
    }

    const toggleShowAlert = () => {
        showNotifDispatch({ type: "SET_PERMISSION", payload: { ...showNotifState, showAlert: !showNotifState.showAlert } })
    }

    useEffect(() => {
        // const fetchDistrictDataListner = async (distID) => {
        //     showNotifState.showAlert && setInterval(() => {
        //         axios.get(calendarByDistrict + `district_id=${distID}&date=${moment().format("DD-MM-YYYY")}`).then(e => {
        //             checkAppointment(e.data.centers)
        //         })
        //     }, 5000)
        // }
        const checkAppointment = (centers) => {
            centers !== undefined && centers !== null && centers.map((item, index) => {
                // item.sessions[0].available_capacity !== 0 && displayNotification()
            })
        }
        displayNotification()
        // localNotifData.districtID !== null && fetchDistrictDataListner(localNotifData.districtID)

    }, [localNotifData])

    const checkDur = (startTime) => {
        const vTime = moment(startTime)
        if (startTime === null) { return true }
        const currentTime = moment()
        var timePassed = moment.utc(moment(currentTime, "DD/MM/YYYY HH:mm:ss").diff(moment(vTime, "DD/MM/YYYY HH:mm:ss"))).format("mm")
        console.log(timePassed)
        return Number.parseInt(timePassed) >= 30 && true
    }

    function displayNotification() {
        if (Notification.permission === 'granted') {
            navigator.serviceWorker.ready.then(function (reg) {
                let swLocalVar = JSON.parse(localStorage.getItem("notificationPayload"))
                checkDur(swLocalVar.lastNotif) && swLocalVar.showAlert && reg.showNotification(`Slots available!`, {
                    body: "Slots are available for vaccination! Go check on Cowin.", tag: 'slots-alert'
                }).then(() => localStorage.setItem("notificationPayload", JSON.stringify({ ...swLocalVar, lastNotif: moment().utc().format() })))
            });
        }
        else {
            Notification.requestPermission(function (status) {
                console.log('Notification permission status:', status);
            });
        }
    }

    const fetchDistricts = async (stateID) => {
        showNotifDispatch({ type: "SET_STATE", payload: { ...showNotifState, stateID: stateID } })
        axios.get(districts + stateID,).then(e => setDistrictList(e.data.districts))
    }

    return showNotifState !== null && (
        <div className="reminderContainer">
            <p><span className={classNames("checkBox",
                showNotifState.showAlert && "active",
                showNotifState.userPermission !== "granted" && "disabled"
            )} onClick={() => { toggleShowAlert() }}>
                {showNotifState.userPermission === "granted" ? <BsCheck /> : <BsDash />}
            </span>Enable Reminder</p>
            <select
                defaultValue={0}
                onChange={e => fetchDistricts(e.target.value)}>
                <option value={0} disabled>Select One</option>
                {stateList !== undefined && stateList !== null && stateList.map((item, index) => {
                    return (<option
                        selected={parseInt(showNotifState.stateID) === parseInt(item.state_id)}
                        key={index}
                        value={item.state_id}>{item.state_name}</option>)
                })}
            </select>
            <select
                defaultValue={0}
                onChange={e => {
                    showNotifDispatch({ type: "SET_DISTRICT", payload: { ...showNotifState, districtID: e.target.value } })
                }}>
                {(districtList !== undefined && districtList !== null) ? districtList.map((item, index) => {
                    return (<option
                        selected={parseInt(showNotifState.districtID) === parseInt(item.district_id)}
                        key={index} value={item.district_id}>{item.district_name}</option>)
                }) : <option disabled value={0}>Select State</option>}
            </select>
        </div>
    )
}

export default Reminder
