interface ButtonProps {
    children: any
    className?: string
    color?: 'green' | 'blue' | 'gray'
    onClick?: () => void
}
const Button = (props: ButtonProps) => {
    const color = props.color ?? 'gray'
    return (
        <button onClick={props.onClick}
            className={`
            bg-gradient-to-r from-${color}-400 to-${color}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}

export default Button