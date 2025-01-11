import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Cliente";

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
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        ></Table>
      </Layout>
    </div>
  );
}
