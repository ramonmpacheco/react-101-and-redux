import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import firebase from "../client-api/firebase/config"

export default class ClientRepositoryImpl implements ClientRepository {
    converter = {
        toFirestore(client: Client) {
            return {
                name: client.getName,
                age: client.getAge
            }
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions
        ): Client {
            const data = snapshot.data(options)
            return new Client(snapshot.id, data.name, data.age)
        }
    }
    colection() {
        return firebase.firestore().collection('clients')
            .withConverter(this.converter)
    }
    
    async findAll(): Promise<Client[]> {
        const query = await this.colection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }
    async save(client: Client): Promise<Client> {
        if (client.getId()) {
            await this.colection().doc(client.getId()).set(client)
            return client
        }
        const docRef = await this.colection().add(client)
        const doc = await docRef.get()
        return doc.data()!!
    }
    async delete(client: Client): Promise<void> {
        this.colection().doc(client.getId()).delete()
    }

}