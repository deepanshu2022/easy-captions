import SparklesIcon from "./SparklesIcon"
export default function DemoSection() {
    return (
        <section className="mx-16 flex justify-between items-center ">
            <video className="hidden sm:block h-[440px] rounded-xl shadow-xl overflow-hidden" src="https://github.com/deepanshu2022/easy-captions/raw/main/prevideos/demovideo.mp4"
             controls autoPlay muted loop>
            </video>
            <div className="hidden sm:block">
                <SparklesIcon />
            </div>
            <video className="h-[440px] rounded-xl shadow-xl overflow-hidden" src="https://github.com/deepanshu2022/easy-captions/raw/main/prevideos/demosubbed.mp4"
             controls autoPlay muted loop>
            </video>
        </section>
    )
}


