import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.css";
import parse from "date-fns/parse";
import "../styles/Home.css";
import statesList from "../components/StatesList"
import HRnet from "../components/HRnet";
import Select from 'react-select'
import {employeesAdd} from "../redux/EmployeesActions";
import { useDispatch } from 'react-redux';
import {useEffect, useState} from "react";
import Modal from '@aamal/p14-plugin-modale/dist/components/Modal'
import { ModalActions} from '@aamal/p14-plugin-modale/dist/components/ModalActions'
import { ModalContent} from '@aamal/p14-plugin-modale/dist/components/ModalContent'
import { ModalTitle } from '@aamal/p14-plugin-modale/dist/components/ModalTitle'



function Home() {
    const dispatch = useDispatch()
    const [alertValidation, setAlertValidation] = useState(false)
    const optionsDepartment = [
        {value: 'Marketing', label: 'Marketing'},
        {value: 'Engineering', label: 'Engineering'},
        {value: 'Human Resources', label: 'Human Resources'},
        {value: 'Sales', label: 'Sales'},
        {value: 'Legal', label: 'Legal'}
    ]
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(2, "too small").max(20, "too long!").required("This field is required"),
        lastName: Yup.string().min(2, "too small").max(10, "too long!").required("This field is required"),
        dateOfBirth: Yup.date()
            .transform(function (value, originalValue) {
                if (this.isType(value)) {
                    return value;
                }
                return parse(originalValue, "dd.MM.yyyy", new Date());
            })
            .typeError("please enter a valid date")
            .required()
            .min("1969-11-13", "Date is too early"),
        startDay: Yup.date()
            .transform(function (value, originalValue) {
                if (this.isType(value)) {
                    return value;
                }
                return parse(originalValue, "dd.MM.yyyy", new Date());
            })
            .typeError("please enter a valid date")
            .required()
            .min("1969-11-13", "Date is too early"),
        street: Yup.string().min(2, "too small").max(20, "too long!").required("This field is required"),
        city: Yup.string().min(2, "too small").max(10, "too long!").required("This field is required"),
        state: Yup.object().required("This field is required"),
        zipcode: Yup.number().required("This field is required"),
        department: Yup.object().required("This field is required")
    });
    const initialValues = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDay: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        department: ""
    };
    const  handleReset =(values)=>{
        values.firstName = "";
        values.lastName = "";
        values.dateOfBirth = "";
        values.startDay = initialValues.startDay;
        values.street = initialValues.street;
        values.city = initialValues.city;
        values.state = initialValues.state;
        values.zipcode = initialValues.zipcode;
        values.department = initialValues.department;
    }
    const handleSubmit = (values) => {
        console.log(values);
        console.log(values['department']['label']);
        let obj_values = {...values, "department":values['department']['label'], "state":values['state']['label']}
        dispatch(employeesAdd(obj_values))// Create employee
        setAlertValidation(!alertValidation);
        console.log(alertValidation);

    };
    useEffect(() => {

    }, [setAlertValidation])
    return (
        <div className={"home"}>
            <HRnet/>
            <div className="container">
                <div className="col-md-10 offset-md-1 pt-1">
                    <h1 className="text-center text-color">Create Employee</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSubmit(values)
                            handleReset(values)
                        }}
                    >
                        {({resetForm, values, setFieldValue}) => (
                            <Form>
                                <div className={"row"}>
                                    <div className={"col"}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="firstName">
                                                FirstName:
                                            </label>
                                            <Field
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="form-control"
                                                value={values.firstName}
                                            />
                                            <ErrorMessage
                                                name="firstName"
                                                component="small"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className={"col"}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="lastName">
                                                lastName:
                                            </label>
                                            <Field
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="form-control"
                                                value={values.lastName}
                                            />
                                            <ErrorMessage
                                                name="lastName"
                                                component="small"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col"}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="dateOfBirth">
                                                Date of Birth:
                                            </label>
                                            <Field
                                                type="Date"
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                className="form-control"
                                                value={values.dateOfBirth}
                                            />
                                            <ErrorMessage
                                                name="dateOfBirth"
                                                component="small"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className={"col"}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="startDay">
                                                Start Date:
                                            </label>
                                            <Field
                                                type="Date"
                                                id="startDay"
                                                name="startDay"
                                                className="form-control"
                                                value={values.startDay}
                                            />
                                            <ErrorMessage
                                                name="startDay"
                                                component="small"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={"title-address"}>ADDRESS</div>
                                <div className={"address"}>
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="street">
                                                    Street:
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="street"
                                                    name="street"
                                                    className="form-control"
                                                    value={values.street}
                                                />
                                                <ErrorMessage
                                                    name="street"
                                                    component="small"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>
                                        <div className={"col"}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="city">
                                                    city:
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    className="form-control"
                                                    value={values.city}
                                                />
                                                <ErrorMessage
                                                    name="city"
                                                    component="small"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="state" >
                                                    state:
                                                </label>
                                                <Select
                                                    options={statesList}
                                                    aria-labelledby={"state"}
                                                    name="state"
                                                    id={"state"}
                                                    value={values.state}
                                                    onChange={option =>
                                                        setFieldValue("state", option)}
                                                    defaultValue={values.state}
                                                />
                                                <ErrorMessage
                                                    name="state"
                                                    component="small"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>
                                        <div className={"col"}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="zipcode">
                                                    Zip Code:
                                                </label>
                                                <Field
                                                    id="zipcode"
                                                    name="zipcode"
                                                    className="form-control"
                                                    value={values.zipcode}
                                                />
                                                <ErrorMessage
                                                    name="zipcode"
                                                    component="small"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="department" >
                                        Department:
                                    </label>
                                    <Select
                                        options={optionsDepartment}
                                        aria-labelledby={"department"}
                                        name="department"
                                        id={"department"}
                                        value={values.department}
                                        onChange={option => setFieldValue("department", option)}
                                        defaultValue={values.department}
                                        menuPosition="fixed"
                                        menuPlacement="auto"
                                    />
                                    <ErrorMessage
                                        name="department"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group d-flex justify-content-end gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-success button"
                                    >
                                        Create Employee
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="btn btn-danger button"
                                    >
                                        Annular
                                    </button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {alertValidation &&
            <Modal label="my-super-bright-alert" show={alertValidation} setShow={setAlertValidation}>
                <ModalTitle> Create Employee</ModalTitle>
                <ModalContent>The creation of the employee has been registered, you can consult the new employee in the space "current employees"</ModalContent>
                <ModalActions>
                    <button type="button" onClick={() => setAlertValidation(!alertValidation)}>Close</button>
                </ModalActions>
            </Modal>}
        </div>
    )
}

export default Home
