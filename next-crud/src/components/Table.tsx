import Client from "@/core/Cliente"
import { table } from "console"
import { EditIcon, TrashIcon } from "./Icons"

interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}
const Table = (props: TableProps) => {
    const showActions = props.selectedClient || props.deletedClient
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {showActions ? (
                    <th className="p-4">Actions</th>
                ) : false}
            </tr>
        )
    }
    function renderActions(client: Client) {
        return (
            <td className="flex justify-center">
                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)}
                        className={`
                        flex justify-center items-center 
                        text-green-600 rounded-full hover:bg-purple-50 
                        p-2 m-1
                    `}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.deletedClient ? (
                    <button onClick={() => props.deletedClient?.(client)}
                        className={`
                        flex justify-center items-center 
                        text-red-500 rounded-full hover:bg-purple-50 
                        p-2 m-1
                    `}>
                        {TrashIcon}
                    </button>
                ) : false}
            </td>
        )
    }
    function renderData() {
        return (
            props.clients?.map((c, i) => {
                return <tr key={c.getId()}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <td className="text-left p-4">{c.getId()}</td>
                    <td className="text-left p-4">{c.getName()}</td>
                    <td className="text-left p-4">{c.getAge()}</td>
                    {showActions ? renderActions(c) : false}
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