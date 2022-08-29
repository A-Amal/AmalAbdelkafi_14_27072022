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
        startDate: Yup.date()
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
        zipCode: Yup.number().required("This field is required"),
        department: Yup.object().required("This field is required")
    });
    const initialValues = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: ""
    };
    const handleSubmit = (values) => {
        console.log(values);
        dispatch(employeesAdd({...values}))// Create employee
        setAlertValidation(!alertValidation);
        console.log(alertValidation);

    };
    useEffect(() => {


    }, [])
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
                        }}
                    >
                        {({resetForm, errors, values, setFieldValue}) => (
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
                                            <label htmlFor="startDate">
                                                Start Date:
                                            </label>
                                            <Field
                                                type="Date"
                                                id="startDate"
                                                name="startDate"
                                                className="form-control"
                                                value={values.startDate}
                                            />
                                            <ErrorMessage
                                                name="startDate"
                                                component="small"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                                <label htmlFor="state">
                                                    state:
                                                </label>
                                                <Select
                                                    options={statesList}
                                                    name="state"
                                                    id={"state"}
                                                    value={values.state}
                                                    onChange={option => setFieldValue("state", option)}
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
                                                <label htmlFor="zipCode">
                                                    Zip Code:
                                                </label>
                                                <Field
                                                    id="zipCode"
                                                    name="zipCode"
                                                    className="form-control"
                                                    value={values.zipCode}
                                                />
                                                <ErrorMessage
                                                    name="zipCode"
                                                    component="small"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="department">
                                        Department:
                                    </label>
                                    <Select
                                        options={optionsDepartment}
                                        name="department"
                                        id={"department"}
                                        value={values.department}
                                        onChange={option => setFieldValue("department", option)}
                                        defaultValue={values.department}
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
                                        Save
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
                <Modal label="my-super-bright-alert"  show={alertValidation} setShow={setAlertValidation}>
                    <ModalTitle> Modal Title</ModalTitle>
                    <ModalContent>*****Modal Message*****</ModalContent>
                    <ModalActions>
                        <button type="button" onClick={() =>setAlertValidation(!alertValidation)}>Close Modal</button>
                    </ModalActions>
                </Modal>
            </div>
        </div>
    )
}

export default Home
