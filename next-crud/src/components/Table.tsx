import Client from "@/core/Cliente"
import { table } from "console"

interface TableProps {
    clients: Client[]
}
const Table = (props: TableProps) => {
    function renderHeader() {
        return (
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        )
    }
    function renderData() {
        return (
            props.clients?.map((c, i) => {
                return <tr key={c.getId()}>
                    <td>{c.getId()}</td>
                    <td>{c.getName()}</td>
                    <td>{c.getAge()}</td>
                </tr>
            })
        )
    }
    return (
        <table>
            <thead>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}

export default Table