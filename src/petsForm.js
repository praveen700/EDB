import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonAppBarr from "./Appbar";
import { useNavigate } from "react-router-dom";
import "./pets.scss"

const Pets = () => {
    const navigate = useNavigate()

    const [isEnable, setisEnable] =useState(true)
    const [inputValues, setInputValues] = useState({
        tags: '', description: ''
    });

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };
    const Isdisable = () => {
        if(inputValues?.tags?.length < 0 || inputValues?.description?.length < 0){
            setisEnable(true)
        }else{
            setisEnable(false)
        }
    }
    const submit = async(event) =>{
        event.preventDefault();
        const petPost = {
            tags: inputValues?.tags,
            description: inputValues?.description
        }
        await fetch("http://localhost:3000/pets", {
            method: "POST",
            body: JSON.stringify(petPost),
            headers: { 'Content-Type': 'application/json'}
        });
        setInputValues({
            tags: '', description: ''
        });
        setisEnable(true)
        navigate("/");
       
    }

    return (
        <div className="pets">
            <ButtonAppBarr />
        <form>
            <ul className="form-style-1">
                <li>
                    <label>Tags <span className="required">*</span></label>
                    <input type="text" name="tags" className="field-long" 
                    onBlur={Isdisable}
                    onChange={handleOnChange} value={inputValues?.tags} />
                </li>
                <li>
                    <label>Description: <span className="required">*</span></label>
                    <textarea  onBlur={Isdisable}  name="description" id="description" className="field-long field-textarea" onChange={handleOnChange} value={inputValues?.description}></textarea>
                </li>
                <li>
                    <Button variant="primary" onClick={submit} disabled={isEnable}>Submit</Button>{' '}
                </li>
            </ul>
        </form>
        </div>

    )
}

export default Pets;