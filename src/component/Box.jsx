export default function Box({ children }) {
    return <div className='bg-[rgba(0,0,0,.6)] min-h-[80vh] min-w-[80vw] rounded-[20px] text-white overflow-hidden'>{children}</div>;
}
