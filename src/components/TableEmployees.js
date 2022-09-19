import Table from "rc-table";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import cloneDeep from "lodash/cloneDeep";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {employeesSelector} from "../redux/EmployeesSelectors";
import {useEffect} from "react";
import {employeesGet} from "../redux/EmployeesActions";
import Select from "react-select";
import 'rc-dropdown/assets/index.css';
import 'rc-menu/assets/index.css';
import SORT_DESC from '../assets/icons/sort-text-desc2.svg'
import SORT_ASC from '../assets/icons/sort-text-asc1.svg'
import SORT_DESC_NUM from '../assets/icons/sort-numeric-desc1.svg'
import SORT_ASC_NUM from '../assets/icons/sort-numeric-asc1.svg'


/**
 * Table Employees pages
 * @component
 */

function TableEmployees() {

    /**
     * States
     */

    const dispatch = useDispatch()
    const {employees} = useSelector(employeesSelector)// Data
    const [value, setValue] = useState("");
    const [dataSearch, setDataSearch] = useState(employees)
    const [countPerPage, setCountPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1);
    const [collection, setCollection] = useState(
       value? cloneDeep(dataSearch.slice(0, countPerPage)):cloneDeep(employees.slice(0, countPerPage))
    );
    const optionsCountPerPage = [
        {value: 5, label: 5},
        {value: 10, label: 10},
        {value: 15, label: 15},
        {value: 20, label: 20},
        {value: 25, label: 25}
    ]
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(SORT_ASC)
    const tabField = ['firstName', 'lastName', 'department', 'street', 'city', 'state', 'zipcode']

    /**
     * sort data
     * @param e
     */
    const handleSortASC = (e) => {
        if (tabField.includes(e.target.title))
           return employees.sort((a, b) => a[e.target.title] < b[e.target.title] ? -1 : 0)
        else
            return employees.sort((a, b) => new Date(a[e.target.title]) < new Date(b[e.target.title]) ? -1 : 0)
    }
    const handleSortDESC = (e) => {
        if (tabField.includes(e.target.title))
            return  employees.sort((a, b) => a[e.target.title] > b[e.target.title] ? -1 : 0)
        else
            return  employees.sort((a, b) => new Date(a[e.target.title]) > new Date(b[e.target.title]) ? -1 : 0)

    }
    const addOnHeaderCell = (column) => ({
        "onClick": () => {
            setSortDirection((currentSortDirection) =>
                currentSortDirection === SORT_ASC ? SORT_DESC : SORT_ASC
            );
            if (sortColumn !== column) {
                setSortColumn(column);
                setSortDirection(SORT_ASC);
            }
        },
    });
    const columns = [
        {
            title: <div className={"columns-style"}>
                <p>First Name</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC} alt="Icon users" title={"firstName"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC} alt="Icon users" title={"firstName"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "firstName",
            key: "First Name",
            width: 150,
            onHeaderCell: () => addOnHeaderCell( "firstName")
        },
        {
            title: <div className={"columns-style"}>
                <p>Last Name</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC} alt="Icon users" title={"lastName"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC} alt="Icon users" title={"lastName"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "lastName",
            key: "Last Name",
            width: 150,
            onHeaderCell: () => addOnHeaderCell("lastName")
        },
        {
            title: <div className={"columns-style"}>
                <p>startDay</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC_NUM} alt="Icon users" title={"startDay"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC_NUM} alt="Icon users" title={"startDay"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "startDay",
            key: "Start Date",
            width: 150,
            onHeaderCell: () => addOnHeaderCell("startDay")
        },
        {
            title: <div className={"columns-style"}>
                <p>Department</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC} alt="Icon users" title={"department"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC} alt="Icon users" title={"department"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "department",
            key: "Department",
            width: 150,
            onHeaderCell: () => addOnHeaderCell("Department")
        },
        {
            title: <div className={"columns-style"}>
                <p>Date of Birth</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC_NUM} alt="Icon users" title={"dateOfBirth"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC_NUM} alt="Icon users" title={"dateOfBirth"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "dateOfBirth",
            key: "Date of Birth",
            width: 150,
            onHeaderCell: () => addOnHeaderCell("Date of Birth")
        },
        {
            title: <div className={"columns-style"}>
                <p>Street</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC} alt="Icon users" title={"street"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC} alt="Icon users" title={"street"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "street",
            key: "Street",
            width: 150,
            onHeaderCell: () => addOnHeaderCell("Street")
        },
        {
            title: <div className={"columns-style"}>
                <p>City</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC} alt="Icon users" title={"city"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC} alt="Icon users" title={"city"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "city",
            key: "City",
            width: 150,
            onHeaderCell: () => addOnHeaderCell("City")
        },
        {
            title: <div className={"columns-style"}>
                <p>State</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC} alt="Icon users" title={"state"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC} alt="Icon users" title={"state"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "state",
            key: "State",
            width: 150,
            onHeaderCell: () => addOnHeaderCell("State")
        }, {
            title: <div className={"columns-style"}>
                <p>Zip Code</p>
                <div className={"svg-sort"}>
                    <img src={SORT_DESC_NUM} alt="Icon users" title={"zipcode"} className="sort-svg"
                         onClick={handleSortDESC}/>
                    <img src={SORT_ASC_NUM} alt="Icon users" title={"zipcode"} className="sort-svg"
                         onClick={handleSortASC}/>
                </div>
            </div>,
            dataIndex: "zipcode",
            key: "Zip Code",
            width: 150,
            onHeaderCell: () => addOnHeaderCell("Zip Code")
        }
    ];
// let dataTable
    /*
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
*/
    /**
     * Paginate data
     * @param p
     */
    const updatePage = p => {
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        value? setCollection(cloneDeep(dataSearch.slice(from, to))):setCollection(cloneDeep(employees.slice(from, to)))

    };

    /**
     * Search in data
     *
     */
    const filterSearch = (val) => {
        setDataSearch(employees)
        // Format terms
        const words = val
            .toLowerCase()
            .trim()// Remove whitespace
            .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")// Remove punctuation
            .split(' ')
        // Search method
        const searchInDate = (date, term) =>
            (new Date(date)).toLocaleDateString('en-US').toLowerCase().includes(term) ||
            (new Date(date)).toLocaleDateString('en-US').includes(term)
        // Search each terms
        let results;
        words.forEach((word) => {
            results = dataSearch.filter((item) => (
                item.firstName.toLowerCase().includes(word) ||
                item.lastName.toLowerCase().includes(word) ||
                searchInDate(item.dateOfBirth, word) ||
                item.street.toLowerCase().includes(word) ||
                item.city.toLowerCase().includes(word) ||
                item.state.toLowerCase().includes(word) ||
                item.zipcode.toLowerCase().includes(word) ||
                searchInDate(item.startDay, word) ||
                item.department.toLowerCase().includes(word)
            ))
        })
        setDataSearch(results);
    }

    useEffect(() => {
        dispatch(employeesGet())
        if (!value) {
            updatePage(1);
        }
    }, [countPerPage, sortDirection, sortColumn, value, dispatch])

    return (
        <div className={"container-table"}>
            <div className="search">
                <div className="div-search-select">
                    <Select
                        options={optionsCountPerPage}
                        name="countPerPage"
                        aria-labelledby={"countPerPage"}
                        id={"countPerPage"}
                        value={countPerPage}
                        onChange={option => setCountPerPage(option.value)}
                    />
                </div>
                <form className="d-flex">
                    <input className="form-control me-2 div-search-select" type="search"
                           placeholder="Search" aria-label="Search"
                           value={value}
                           onChange={e => setValue(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="button"
                            onClick={() => filterSearch(value)}>Search
                    </button>
                </form>
            </div>
            <div className={"table-light"}>
                <Table
                    columns={columns}
                    data={collection}
                    tableLayout="auto"
                    style={{marginBottom: 20}} scroll={{x: 1500}}
                    sticky
                />
                {value ? <Pagination
                    pageSize={countPerPage}
                    onChange={updatePage}
                    current={currentPage}
                    total={dataSearch.length}
                />:
                <Pagination
                    pageSize={countPerPage}
                    onChange={updatePage}
                    current={currentPage}
                    total={employees.length}
                />}
            </div>
        </div>
    )
}

export default TableEmployees
