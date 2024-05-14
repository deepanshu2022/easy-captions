import PageHeader from "@/Components/PageHeader"

export default function PricingPage () {
    return (
        <>  
            <div className="mb-16">
                <PageHeader h1Text={'Guess What? Its free for now.'} h2Text={'Start using before we start taking money from you ;)'}/>
            </div>
            <section className="sm:grid grid-cols-2 gap-28 text-gray-700 flex flex-col items-center" >
                <div className=" sm:ml-28 text-center py-6 bg-card px-4 rounded-xl shadow-xl sm:w-3/4 cursor-pointer ease-in duration-200 hover:shadow-2xl">
                <a href="/">
                    <h2 className="text-3xl font-semibold mb-2">Standard</h2>
                    <p className="mb-12"><s className="text-xl mr-1">$2</s>(Currently Free)</p>
                    <ul className="mb-16 font-medium">
                        <li className="mb-2">No Cost</li>
                        <li className="mb-2">Unlimited Uploads (upto 4.5mb)</li>
                        <li className="mb-2">Slower speed than Primium</li>
                    </ul>
                </a>
                </div>
                <a href="/" className="relative group">
                    <div className="text-center py-6 bg-card px-4 rounded-xl shadow-xl sm:w-3/4 cursor-pointer hover:shadow-2xl">
                        <h2 className="text-3xl font-semibold mb-2">Primium</h2>
                        <p className="mb-12"><span className="text-xl mr-1 font-medium">$5</span> <br />(Lifetime)</p>
                        <ul className="mb-16 font-medium">
                            <li className="mb-2">Unlimited Uploads (upto 200mb)</li>
                            <li className="mb-2">Higher upload Speed</li>
                            <li className="mb-2">Higher transcription Speed</li>
                        </ul>
                    </div>
                    <div className="absolute top-0 left-0 sm:w-3/4 w-full h-full bg-black bg-opacity-70 flex items-center justify-center rounded-xl sm:opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300">
                        <span className="text-stone-200 text-2xl font-semibold">Coming Soon...</span>
                    </div>
                </a>
                
            </section>
        </>

    )
}