import React, {useState, useEffect} from 'react';

const ContactForm = (props) => {

    const initialFieldValue = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValue);

    useEffect( ()=> {
        if(props.currentId == ''){
            setValues({
                ...initialFieldValue
            })
        }else{
            setValues({
                ...props.ContactObjects[props.currentId]
            })
        }
    }, [props.currentId, props.ContactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value   // or fullName : value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return ( 
        <form autoComplete="off" onSubmit = {handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="full name" name="fullName" 
                value={values.fullName}
                onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" name="mobile" 
                    value={values.mobile}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" 
                    value={values.email}
                    onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
                    <textarea className="form-control" placeholder="Address" name="address"
                    value={values.address}
                    onChange={handleInputChange}
                    />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == '' ? 'Save':'Update'} className="btn btn-primary btn-block" />
            </div>
        </form>
     );
}
 
export default ContactForm;