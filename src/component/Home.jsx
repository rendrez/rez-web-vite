import cat from '../assets/cat.svg';

export default function Home({ children }) {
    const image = cat;
    const name = 'Muhammad Randy';
    const description = 'A passionate website developer';
    return (
        <div className='font-sans h-full grid place-items-center'>
            <div className='relative bottom-10 text-center'>
                <img src={image} className='mx-auto w-[35%]' alt='proud' />
                <h1 className='text-4xl font-medium'>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}
