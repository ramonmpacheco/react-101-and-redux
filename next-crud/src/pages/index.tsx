import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";

import useClients from "@/hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    newClient,
    showTable,
    deletedClient,
    selectedClient,
    isTableVisible,
    saveOrUpdateClient,
  } = useClients()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {isTableVisible ? (
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
            cancelOnClick={showTable}
          />
        )}
      </Layout>
    </div>
  );
}
