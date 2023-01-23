export default function() {
    return (
        <div className="flex justify-around items-center p-5 border-2 border-red-500">
            <div className="border-2">
                <p>1440 Oak Hill Road</p>
                <p>Whiterun, OH 44523</p>
                <br></br>
                <p>Showroom Hours 8-4 Mon-Fri</p>

            </div>

            <div className="border-2">
                <p>1-800-555-2525</p>
                <br></br>
                <p>woodrow@thewoodshed.com</p>
            </div>

            <div>
                <button className="border-4 text-white text-bold text-2xl border-green-500 py-2 px-4 rounded-lg hover:bg-green-300 hover:text-yellow-600">
                    Take a tour
                </button>
            </div>
        </div>
    )
}