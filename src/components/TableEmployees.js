import Table from "rc-table";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import cloneDeep from "lodash/cloneDeep";
import employeesData from "../employees.json"
import styled from 'styled-components';
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {employeesSelector} from "../redux/EmployeesSelectors";
import {useEffect} from "react";
import {employeesGet} from "../redux/EmployeesActions";
import throttle from "lodash/throttle";


function TableEmployees() {
    const dispatch = useDispatch()
    const {employees} = useSelector(employeesSelector)// Data
    const [data, setData] = useState(employeesData)
    const [search, setSearch] = useState('')// Search input
    const [value, setValue] = useState("");
    const countPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [collection, setCollection] = useState(
        cloneDeep(data.slice(0, countPerPage))
    );
    const columns = [
        {
            title: "First Name",
            dataIndex: "firstName",
            key: "First Name",
            width: 100,
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
            key: "Last Name",
            width: 100,
        },
        {
            title: "Start Date",
            dataIndex: "startDay",
            key: "Start Date",
            width: 100,
        },
        {
            title: "Department",
            dataIndex: "department",
            key: "Department",
            width: 100,
        },
        {
            title: "Date of Birth",
            dataIndex: "dateOfBirth",
            key: "Date of Birth",
            width: 100,
        },
        {
            title: "Street",
            dataIndex: "street",
            key: "Street",
            width: 150,
        },
        {
            title: "City",
            dataIndex: "city",
            key: "City",
            width: 100,
        },
        {
            title: "State",
            dataIndex: "state",
            key: "State",
            width: 100,
        }, {
            title: "Zip Code",
            dataIndex: "zipcode",
            key: "Zip Code",
            width: 100,
        }
    ];
   // let dataTable
    const BodyRow = styled.tr`
      & td {
        transition: all 0.3s;
      }

      &:hover td {
        background: rgba(191, 189, 189, 0.64);
        transform: scale(1.01);
      }
    `;

    const components = {
        body: {
            row: BodyRow,
        },
    };
    const updatePage = p => {
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        /*
        employees.map((ele, cpt)=>setData(data.push(ele)))
        dataTable = data;
        console.log(employeesData)
        console.log(dataTable)*/
        setCollection(cloneDeep(data.slice(from, to)));
    };
    /**
     * Search in data
     *
     */

    const filterSearch = () => {
        // Format terms
        const words = value
            .toLowerCase()
            .trim()// Remove whitespace
            .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")// Remove punctuation
            .split(' ')
        // Search method
        const searchInDate = (date, term) =>
            (new Date(date)).toLocaleDateString('en-US').toLowerCase().includes(term) ||
            (new Date(date)).toLocaleDateString('en-US').includes(term)
        // Search each terms
        let results ;
        console.log(words)
        console.log(data)
        words.forEach((word) => {
            console.log(word)
            results = data.filter((item) => (
                item.firstName.toLowerCase().includes(word) ||
                item.lastName.toLowerCase().includes(word) ||
                searchInDate(item.dateOfBirth, word) ||
                item.street.toLowerCase().includes(word)||
                item.city.toLowerCase().includes(word)||
                item.state.toLowerCase().includes(word)||
                item.zipcode.toLowerCase().includes(word)||
                searchInDate(item.startDay, word) ||
                item.department.toLowerCase().includes(word)
            ))
        })
        console.log(results)
        setData(results);

    }

    useEffect(() => {
        dispatch(employeesGet())

        console.log(value)
        if (value)
            filterSearch.current(value);

    }, [])

    return (
        <div className={"container-table"}>
            <div className="search">
                <form className="d-flex">
                    <input className="form-control me-2" type="search"
                           placeholder="Search" aria-label="Search"
                           value={value}
                           onChange={e => setValue(e.target.value)}/>
                        <button className="btn btn-outline-success" type="button" onClick={filterSearch}>Search</button>
                </form>
            </div>
            <div className={"table-light"}>
                <Table
                    columns={columns}
                    data={collection}
                    tableLayout="auto"
                    style={{ marginBottom:20}} scroll={{x: 1500}}
                    components={components}
                />
                <Pagination
                    pageSize={countPerPage}
                    onChange={updatePage}
                    current={currentPage}
                    total={data.length}
                />
            </div>
        </div>
    )
}

export default TableEmployees
