import React, { useEffect, useState } from "react";
import PetTable from "./table";
import ButtonAppBarr from "./Appbar";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "./petList.scss"

const PetList = () => {
    const navigate = useNavigate()
    const [petResponse, setPetReponse] = useState([]);
    useEffect(() => {
        const fetchpost = async () => {
            const res = await fetch("http://localhost:3000/pets");
            const petRes = await res.json()
            setPetReponse(petRes)
        }
        fetchpost();
    }, [])
    const handaleRoute =() => {
        navigate("/pets-form");
    }
    return (
        <div className="pets-list">
            <ButtonAppBarr />
            <div className="pet-table">
                <div className="headaers">
                    <h2 className="h2-tag-pet">PET-TABLE</h2>
                    <Button variant="contained" onClick={handaleRoute}>Add Pets</Button>
                </div>
                <PetTable row={petResponse} />
            </div>
        </div>
    );
};

export default PetList;