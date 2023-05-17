import { Checkbox } from "@mui/material";
import "./inputForm.style.css";
import { useState } from "react";

const defaultForm = {
    name: "",
    phone: "",
    address: "",
    date: "",
    signature: "",
}


const InputForm = () => {

    const [formData, setFormData] = useState(defaultForm);

    const onChangeHandler = (e) => {
        console.log(e.target.name, ":", e.target.value);
        setFormData({ ...defaultForm, [e.target.name]: e.target.value });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData)
    }


    return (
      <div className="box-container">
        <div className="box">
          <h1>Shippers info</h1>
          <form onSubmit={onSubmitHandler}>
            <div>
              <label htmlFor="name">Name:</label>
              <label htmlFor="zip">Phone:</label>
              <label htmlFor="address">Address:</label>
              <label htmlFor="date">Date:</label>
              <label htmlFor="signature">Signature:</label>
            </div>
            <div>
              <input
                name="name"
                onChange={onChangeHandler}
                value={formData.name}
              />
              <input
                name="phone"
                onChange={onChangeHandler}
                value={formData.phone}
              />
              <input
                name="address"
                onChange={onChangeHandler}
                value={formData.address}
              />
              <input
                type="date"
                name="date"
                onChange={onChangeHandler}
                value={formData.date}
              />
              <Checkbox
                sx={{ marginLeft: "110px", marginTop: "20px", color: "white" }}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
}

export default InputForm;