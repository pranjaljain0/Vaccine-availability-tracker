import "./Modal.scss"

import React, { useEffect, useState } from 'react'
import { genders, idTypes, newID } from "../../config/API"

import { AiFillCloseCircle } from "react-icons/ai"
import axios from "axios"
import classNames from "classnames"

function NewBenModal({ showAddBen, setShowAddBen, config }) {

    const [genderList, setGenderList] = useState(null)
    const [IDList, setIDList] = useState(null)
    const [selectedIDName, setSelectedIDName] = useState(null)
    const [uploadObj, setUploadObj] = useState({
        birth_year: "",
        consent_version: "V1",
        gender_id: 1,
        name: "",
        photo_id_number: "",
        photo_id_type: 1
    })

    const addUser = async () => {
        axios.post(newID, config).then(e => {
            setShowAddBen(false)
            console.log("User Added")
        }).catch(err => {
            setShowAddBen(false)
            console.error(err)
        })
    }

    useEffect(() => {
        const fetchGenders = async () => {
            axios.get(genders, config).then(e => setGenderList(e.data.genders))
        }

        const fetchIDs = async () => {
            axios.get(idTypes, config).then(e => { setIDList(e.data.types) })
        }

        fetchGenders()
        fetchIDs()
    }, [config])

    return showAddBen && (
        <div className="modal">
            <div className="modalBackdrop"></div>
            <div className="modalContainer">
                <div className="content">
                    <div className="ModalHeader">
                        <span>Add Beneficiary</span>
                        <AiFillCloseCircle className="closeIcon" onClick={() => setShowAddBen(false)} />
                    </div>
                    <div className="ModalMain">
                        <div className="inputGroup">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe"></input>
                        </div>
                        <div className="inputGroup">
                            <label>ID</label>
                            <select value={uploadObj.photo_id_type} onChange={(e) => {
                                setSelectedIDName(e.target.options[e.target.selectedIndex].text)
                                setUploadObj({ ...uploadObj, photo_id_type: e.target.value })
                            }}>
                                {IDList !== undefined && IDList !== null &&
                                    IDList.map((item, index) => {
                                        return (<option key={index} name={item.type} value={item.id}>{item.type}</option>)
                                    })}
                            </select>
                        </div>
                        <div className="inputGroup">
                            <label>{selectedIDName} Number</label>
                            <input type="text"></input>
                        </div>
                        <div className="inputGroup">
                            <label>Gender</label>
                            <div className="multiSelect">
                                {genderList !== undefined && genderList !== null && genderList.map((item, index) => {
                                    return <>
                                        <span
                                            onClick={() => { setUploadObj({ ...uploadObj, gender_id: item.id }) }}
                                            className={classNames("multiSelectItem", uploadObj.gender_id === item.id && "active")}>{item.gender}</span>
                                    </>
                                })}
                            </div>
                        </div>
                        <div className="inputGroup">
                            <label>Year of birth</label>
                            <input type="text" placeholder="XXXX"></input>
                        </div>
                        <div className="buttonContainer">
                            <span className="addButton" onClick={() => { addUser() }}>Add User</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewBenModal
