export default function Button({ name }) {
    return (
        <button className="bg-blue-200 px-5 py-2 mt-5 rounded-xl text-3xl text-shadow font-bold hover:bg-red-600">
            {name}
        </button>
    )
}