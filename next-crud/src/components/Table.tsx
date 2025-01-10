import Client from "@/core/Cliente"
import { table } from "console"

interface TableProps {
    clients: Client[]
}
const Table = (props: TableProps) => {
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
            </tr>
        )
    }
    function renderData() {
        return (
            props.clients?.map((c, i) => {
                return <tr key={c.getId()}
                    className={`${i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-50'}`}
                >
                    <td className="text-left p-4">{c.getId()}</td>
                    <td className="text-left p-4">{c.getName()}</td>
                    <td className="text-left p-4">{c.getAge()}</td>
                </tr>
            })
        )
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}

export default Table