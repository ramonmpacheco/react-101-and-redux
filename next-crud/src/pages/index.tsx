import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Cliente";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const clients = [
    new Client('1', 'Jhon', 30),
    new Client('2', 'Ruth', 31),
    new Client('3', 'Marcus', 29),
    new Client('4', 'Matheus', 20),
  ]
  function selectedClient(client: Client) {
    console.log(client.getName());
  }
  function deletedClient(client: Client) {
    console.log(client.getName());
  }
  function saveOrUpdateClient(client: Client) {
    console.log(client);
  }
  const [visible, setVisible] = useState<'table' | 'form'>('table')
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
                onClick={() => setVisible('form')}
                className="mb-4" color="green">New Cliente</Button>
            </div>
            <Table clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            clientChange={saveOrUpdateClient}
            cancelOnClick={() => setVisible('table')}
            client={clients[0]} />
        )}
      </Layout>
    </div>
  );
}
