import { useState } from "react"
import Input from "./Input"
import Client from "@/core/Cliente"
import Button from "./Button"

interface FormProps {
    client: Client
}

const Form = (props: FormProps) => {
    const id = props.client?.getId()
    const [name, setName] = useState(props.client?.getName() ?? '')
    const [age, setAge] = useState(props.client?.getAge() ?? 0)
    return (
        <div>
            {id ? (
                <Input
                    readonly
                    value={id}
                    text="Code"
                    className="mb-4"
                />
            ) : false}
            <Input
                text="Name"
                value={name}
                className="mb-4"
                valueChange={setName}
            />
            <Input text="Age" type="number" value={age} valueChange={setAge} />
            <div className="flex justify-end mt-3">
                <Button color="blue" className="mr-2">
                    {id ? 'Update' : 'Create'}
                </Button>
                <Button>Cancel</Button>
            </div>
        </div>
    )
}

export default Form