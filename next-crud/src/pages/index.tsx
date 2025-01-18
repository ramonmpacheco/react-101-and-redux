import { useEffect, useState } from "react";

import Client from "@/core/Client";
import Form from "@/components/Form";
import Table from "@/components/Table";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

import ClientRepository from "@/core/ClientRepository";
import ClientRepositoryImpl from "@/db/ClientRepositoryImpl";

export default function Home() {
  const repo: ClientRepository = new ClientRepositoryImpl()
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAll, [])

  function getAll() {
    repo.findAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(new Client())

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }
  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }
  async function saveOrUpdateClient(client: Client) {
    await repo.save(client)
    getAll()
  }
  function newClient() {
    setClient(new Client())
    setVisible('form')
  }
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button
                onClick={newClient}
                className="mb-4" color="green">New Cliente</Button>
            </div>
            <Table clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            client={client}
            clientChange={saveOrUpdateClient}
            cancelOnClick={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  );
}
