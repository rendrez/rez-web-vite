export default function Navbar() {
    return (
        <div className='bg-black relative top-0 right-0 left-0 font-sans font-medium'>
            <ul className='grid grid-cols-3'>
                <h1 className='justify-self-start pl-3 py-1 text-xl'>Rez Web</h1>
                <div className='self-center justify-self-center'>
                    <List>Home</List>
                    <List>Project</List>
                    <List>About Me</List>
                    <List>Contact</List>
                </div>
            </ul>
        </div>
    );
}

function List({ children }) {
    return (
        <li className='inline'>
            <a href='#' className='py-[8px] px-[8px] text-center'>
                {children}
            </a>
        </li>
    );
}
