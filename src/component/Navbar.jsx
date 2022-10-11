export default function Navbar() {
    return (
        <div className='bg-black'>
            <ul className='grid grid-cols-3 justify-items-stretch'>
                <h1 className='justify-self-start pl-3 text-[30px]'>Rez Web</h1>
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
