export default function() {
    return (
        <div className="flex justify-around items-center p-5">
            <div className="">
                <p>1440 Oak Hill Road</p>
                <p>Whiterun, OH 44523</p>
                <br></br>
                <p>Showroom Hours 8-4 Mon-Fri</p>

            </div>

            <div className="">
                <p>1-800-555-2525</p>
                <br></br>
                <p>woodrow@thewoodshed.com</p>
            </div>

            <div>
                <button className="text-white text-bold text-2xl py-2 px-4 rounded-lg hover:border-4 hover:border-green-500 border-4 border-transparent">
                    Take a tour
                </button>
            </div>
        </div>
    )
}