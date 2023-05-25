
const Input = ({
    label: string,
    type: string,
}) => {
    return (
        <div >
            <label htmlFor={label}>{label}</label>
            <input className=" " type={type} />
        </div>
    )
}