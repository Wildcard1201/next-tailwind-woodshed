export default function() {
    return (
        <div className="flex justify-around items-center mx-16 my-16 mx-32 text-bold text-xl text-white text-shadow">
            <div className="">
                <p>1440 Oak Hill Road</p>
                <p>Whiterun, OH 44523</p>
                <p>Showroom Hours 8-4 Mon-Fri</p>

            </div>

            <div className="">
                <p>1-800-555-2525</p>
                <p>woodrow@thewoodshed.com</p>
            </div>

            <div>
                <button className="text-shadow text-bold text-3xl py-2 px-4 rounded-lg hover:border-4 hover:border-green-500 border-4 border-transparent">
                    Take a tour &#8599;
                </button>
            </div>
        </div>
    )
}