export default function Navbar() {
    const brand = 'Rez Web';
    const nav = ['Home', 'Project', 'About Me', 'Contact'];
    return (
        <div className='bg-black relative top-0 right-0 left-0 font-sans font-medium'>
            <ul className='grid grid-cols-3'>
                <h1 className='justify-self-start pl-3 py-1 text-xl'>{brand}</h1>
                <div className='self-center justify-self-center'>
                    {nav.map((item) => (
                        <List children={item} />
                    ))}
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
