import Table from "rc-table";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import cloneDeep from "lodash/cloneDeep";
import employeesData from "../employees.json"
import styled from 'styled-components';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {employeesSelector} from "../redux/EmployeesSelectors";
import {useEffect} from "react";
import {employeesGet} from "../redux/EmployeesActions";




function TableEmployees(){
    const data = employeesData
    const countPerPage = 5;
    const [value, setValue] = useState("");
    const [currentPage, setCurrentPage] =useState(1);
    const [collection, setCollection] = useState(
        cloneDeep(employeesData.slice(0, countPerPage))
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
            width:100,
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
            width: 100,
        },
        {
            title: "City",
            dataIndex: "city",
            key: "City",
            width:100,
        },
        {
            title: "State",
            dataIndex: "state",
            key: "State",
            width:100,
        },{
            title: "Zip Code",
            dataIndex: "zipcode",
            key: "Zip Code",
            width: 100,
        }
    ];

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
        setCollection(cloneDeep(data.slice(from, to)));
    };
    const dispatch = useDispatch()
    const {employees} = useSelector(employeesSelector)// Data
    useEffect(() => {
        if(employees.length === 0) {
            dispatch(employeesGet())
        }
    }, [])

    return(
        <div className={"table-light"}>
            <Table
            columns={columns}
            data={collection}
            tableLayout="auto"
            style={{ width: 950, height: 440 }} scroll={{ x: 1500 } }
            components={components}
            />
            <Pagination
                pageSize={countPerPage}
                onChange={updatePage}
                current={currentPage}
                total={data.length}
            />
        </div>
    )
}
export default TableEmployees
