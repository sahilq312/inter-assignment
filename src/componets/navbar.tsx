interface NavbarProp {
    children : React.ReactNode
}

export const Navbar = ({children}: NavbarProp) => {
    return (
        <div>
            {children}
        </div>
    )
}