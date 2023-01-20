export default function NavButton({ name, value }) {
    return (
      <button value={value} className='p-1.5 ml-1 text-white font-bold text-shadow rounded-md hover:bg-red-200'>
        {name}
      </button>
    )
  }