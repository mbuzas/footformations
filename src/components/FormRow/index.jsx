/* eslint-disable react/react-in-jsx-scope */



const FormRow = ({ type, name, value, handleChange }) => {

    return (

        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {name}
            </label>
            <input type={type} value={value.username} name={name} onChange={handleChange} className="form-input" />
        </div>

    );
};

export default FormRow;
