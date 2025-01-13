interface InputProps {
    value: any
    text: string
    className?: string
    readonly?: boolean
    type?: 'text' | 'number'
    valueChange?: (value: any) => void
}
const Input = (props: InputProps) => {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input
                value={props.value}
                readOnly={props.readonly}
                type={props.type ?? 'text'}
                className={`
                    border border-purple-500 rounded-lg 
                    focus:outline-none bg-gray-100
                    ${props.readonly ? '' : 'focus:bg-white'}
                    px-4 py-2
                `}
                onChange={(e) => props.valueChange?.(e.target.value)}
            />
        </div>
    )
}

export default Input