import { useEffect, useState } from "react"

import Client from "@/core/Client"
import ClientRepository from "@/core/ClientRepository"
import ClientRepositoryImpl from "@/db/ClientRepositoryImpl"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    const {
        showForm,
        showTable,
        isTableVisible
    } = useTableOrForm()

    const [clients, setClients] = useState<Client[]>([])
    const [client, setClient] = useState<Client>(new Client())

    const repository: ClientRepository = new ClientRepositoryImpl()

    function getAll() {
        repository.findAll()
            .then(clients => {
                setClients(clients)
                showTable()
            })
    }

    function selectedClient(client: Client) {
        setClient(client)
        showForm()
    }

    async function deletedClient(client: Client) {
        await repository.delete(client)
        getAll()
    }

    async function saveOrUpdateClient(client: Client) {
        await repository.save(client)
        getAll()
    }

    function newClient() {
        setClient(new Client())
        showForm()
    }

    useEffect(getAll, [])

    return {
        client,
        clients,
        showTable,
        newClient,
        deletedClient,
        isTableVisible,
        selectedClient,
        saveOrUpdateClient,
    }
}