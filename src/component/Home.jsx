import cat from '../assets/cat.svg';

export default function Home({ children }) {
    return (
        <div className='font-sans h-full grid place-items-center'>
            <div className='relative bottom-10 text-center'>
                <img src={cat} className='mx-auto w-[35%]' alt='proud' />
                <h1 className='text-4xl font-medium'>Muhammad Randy</h1>
                <p>A passionate website developer</p>
            </div>
        </div>
    );
}
