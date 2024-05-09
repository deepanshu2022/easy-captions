import SparklesIcon from "./SparklesIcon"
export default function DemoSection() {
    return (
        <section className="mx-8 flex justify-between items-center">
            <video className="hidden sm:block h-[440px] rounded-xl" src="https://videos.pexels.com/video-files/20770858/20770858-sd_540_960_30fps.mp4"
             autoPlay muted loop>
            </video>
            <div className="hidden sm:block">
                <SparklesIcon />
            </div>
            <video className="h-[440px] rounded-xl" src="https://videos.pexels.com/video-files/20770858/20770858-sd_540_960_30fps.mp4"
             autoPlay muted loop>
            </video>
        </section>
    )
}


