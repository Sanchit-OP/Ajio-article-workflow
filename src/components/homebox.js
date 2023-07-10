


export default function Homebox(props){
    return(
        <div className="w-2/5 border text-4xl font-semibold my-32 mx-20  p-10 py-32 align-middle flex-col justify-end">
                    <h1 className="w-full text-center my-10 mb-20">{props.title}</h1>
                    <a href={props.link}>
                    <button className="w-full text-3xl text-centerbg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Login</button>
                    </a>
        </div>
    );
}