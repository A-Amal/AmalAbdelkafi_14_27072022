import TableEmployees from "../components/TableEmployees";
import HRnet from "../components/HRnet";
import "../styles/Home.css"


function Employees(){

    return(
        <div className={"home"}>
            <HRnet/>
            <div className="container"  style={{ padding:20}}>
                <div className="col-md-10">
                    <h1 className="text-start text-color">Current Employees</h1>
                </div>
                <TableEmployees/>
            </div>
        </div>

    )
}
export default Employees
