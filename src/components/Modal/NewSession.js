import "./Modal.scss"

import { AiFillCloseCircle } from "react-icons/ai"
import { GoInfo } from "react-icons/go"
import { Link } from "react-router-dom"
import React from 'react'
import classNames from "classnames"

function NewSession({ show, setShow, selSession, newSession, setNewSession, config }) {

    // const handleSubmit = async () => {
    //     axios.post(schedule, newSession, config).then(e => {
    //         setShow(false)
    //         console.log(e.data)
    //     }).catch(err => {
    //         setShow(false)
    //         console.log(err)
    //     })
    // }

    return show && (
        <div className="modal">
            <div className="modalBackdrop"></div>
            <div className="modalContainer">
                <div className="content">
                    <div className="ModalInfo">
                        <GoInfo className="infoIcon" />
                        <span>To book a session you need to head to <Link to="https://selfregistration.cowin.gov.in/">Cowin</Link>
                        </span>
                    </div>
                    <div className="ModalHeader">
                        <span>Book a session</span>
                        <AiFillCloseCircle className="closeIcon" onClick={() => setShow(false)} />
                    </div>
                    <div className="ModalMain">
                        <div className="inputGroup">
                            <span>{selSession.name}</span>
                        </div>
                        <div className="inputGroup subDetail">
                            <span>{selSession.state_name}</span>
                        </div>
                        <div className="inputGroup subDetail">
                            <span>{selSession.district_name}</span>
                        </div>
                        <div className="inputGroup subDetail">
                            <span>{selSession.pincode}</span>
                        </div>
                        <div className="inputGroup subDetail">
                            <span>{selSession.sessions[0].date}</span>
                        </div>
                        <div className="inputGroup">
                            <label>Gender</label>
                            <div className="multiSelect">
                                {selSession !== undefined && selSession !== null && selSession.sessions[0].slots.map((item, index) => {
                                    return <>
                                        <span
                                            onClick={() => { setNewSession({ ...newSession, slot: item }) }}
                                            className={classNames("multiSelectItem", newSession.slot === item && "active")}>{item}</span>
                                    </>
                                })}
                            </div>
                        </div>
                        {/* <div className="buttonContainer">
                            <span className="addButton" onClick={() => { handleSubmit() }}>Book Session</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewSession
