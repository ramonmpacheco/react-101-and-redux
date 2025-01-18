import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import firestoraDb from "@/client-api/firebase/config";
import { doc, collection, getDocs, QueryDocumentSnapshot, setDoc, SnapshotOptions, addDoc, deleteDoc } from "firebase/firestore";

export default class ClientRepositoryImpl implements ClientRepository {
    converter = {
        toFirestore: (client: Client) => {
            return {
                name: client.getName(),
                age: client.getAge()
            }
        },
        fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Client => {
            const data = snapshot.data(options);
            return new Client(snapshot.id, data.name, data.age);
        }
    }

    colection() {
        return collection(firestoraDb, 'clients').withConverter(this.converter)
    }

    async findAll(): Promise<Client[]> {
        const query = await getDocs(this.colection())
        return query.docs.map(doc => doc.data()) ?? []
    }

    async save(client: Client): Promise<Client> {
        if (client.getId()) {
            await setDoc(
                doc(this.colection(), client.getId()), client
            )
            return client
        }
        const docRef = await addDoc(this.colection(), client)
        return new Client(docRef.id, client.getName(), client.getAge())
    }

    async delete(client: Client): Promise<void> {
        await deleteDoc(doc(this.colection(), client.getId()))
    }

}