export function Input({ children }) {
    return (
        <div>
            {children[0]}
            <input type="text" />
            {children[1]}
        </div>
    )
}