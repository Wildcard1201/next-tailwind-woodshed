import CardTag from './CardTag.js'

export default function() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Image */}
            <img className="w-full max-h-48" src="/img/wood-slab.jpeg" alt="Picture of something"/>
            {/* Text Part */}
            <div className="px-6 py-4">
                <h4 className="font-bold text-xl mb-2">Card Title</h4>
                <p className="text-base text-gray-700">
                    This is the card text. This describes what the card is for and what the picture is.
                </p>
            </div>
            {/* Tags */}
            <div className="px-6 pt-4 pb-2">
                <CardTag name='Maple' />
                <CardTag name='Hand-Carved' />
                <CardTag name='Unique' />
            </div>
        </div>
    )
}