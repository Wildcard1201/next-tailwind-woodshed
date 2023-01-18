export default function NavButton({ name, value }) {
    return (
      <button value={value} className='bg-green-300 p-1.5 ml-1 text-white rounded-md hover:bg-red-400'>
        {name}
      </button>
    )
  }