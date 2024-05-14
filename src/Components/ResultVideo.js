import { useEffect, useState, useRef } from "react";
import SparklesIcon from "./SparklesIcon";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { transcriptionItemsToSrt } from "@/libs/awsTrancriptionHelpers";
import roboto from "./../fonts/Roboto-Regular.ttf";
import robotoBold from "./../fonts/Roboto-Bold.ttf";
import './checkbox.css'


export default function ResultVideo({filename, transcriptionItems}){
    const videoUrl = "https://easy-captions.s3.eu-north-1.amazonaws.com/" + filename;
    const [loaded, setLoaded] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('#FFFFFF');
    const [outlineColor, setOutlineColor] = useState('#000000');
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);
    const [progress, setProgress] = useState(1);
    const [showTooltip, setShowTooltip] = useState(false);
    const [quality, setQuality] = useState('ultrafast');
    const [fontSize, setFontSize] = useState(40);
    const [marginV, setMarginV] = useState(100);

    useEffect(()=> {
        videoRef.current.src = videoUrl;
        load();
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function toFfmpegColor(rgb){
        const bgr = rgb.slice(5,7) + rgb.slice(3,5) + rgb.slice(1,3);
        return '&H' + bgr + '&' ;
    }

    const load = async () => {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
        const ffmpeg = ffmpegRef.current;
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });

        await ffmpeg.writeFile('/tmp/roboto.ttf', await fetchFile(roboto));
        await ffmpeg.writeFile('/tmp/roboto-bold.ttf', await fetchFile(robotoBold));

        setLoaded(true);
    };

    const transcode = async () => {
        const ffmpeg = ffmpegRef.current;
        const srt = transcriptionItemsToSrt(transcriptionItems); 
        await ffmpeg.writeFile(filename, await fetchFile(videoUrl));
        await ffmpeg.writeFile('subs.srt', srt);
        videoRef.current.src = videoUrl;
        await new Promise((resolve, reject) =>{
            videoRef.current.onloadedmetadata = resolve;
        });
        const duration = videoRef.current.duration;
        
        
        ffmpeg.on('log', ({ message }) => {
            const regexResult = /time=([0-9:.]+)/.exec(message);
            if(regexResult && regexResult?.[1]){
                const howMuchIsDone = regexResult?.[1];
                const [hours,minutes,seconds] = howMuchIsDone.split(':');
                const doneTotalSeconds = hours * 3600 + minutes * 60 + seconds;
                const videoProgress = doneTotalSeconds / duration;
                setProgress(videoProgress);
                console.log(videoProgress);

            }
        });
        
        await ffmpeg.exec([
            '-i', filename, 
            '-preset', 
            quality,
            '-vf', 
            `subtitles=subs.srt:fontsdir=/tmp:force_style='Fontname=Roboto Bold,
                FontSize=${fontSize},MarginV=${marginV},PrimaryColour=${toFfmpegColor(primaryColor)},OutlineColour=${toFfmpegColor(outlineColor)}'`,
            'output.mp4'
        ]);

        
        const data = await ffmpeg.readFile('output.mp4');
        videoRef.current.src =
            URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));

        setProgress(1);
    }

    return (
        <>
            <button
               onClick={transcode}
               className="bg-violet-100 text-violet-700 px-6 py-2 rounded-full inline-flex gap-3 border-2 border-purple-700/50 hover:bg-violet-200 cursor-pointer mb-4">
                <SparklesIcon />
                <span>Apply Captions</span>
            </button>
            <div className="mb-4 grid grid-cols-2 grid-rows-2 justify-center items-center">
                <div className="flex items-center gap-2 mb-2">
                <span>Primary Color : </span>
                <input 
                    type="color" 
                    value={primaryColor} 
                    onChange={ev => setPrimaryColor(ev.target.value)} 
                />
                </div>

                {/* Font Size */}
                <div className="flex flex-col gap-1 justify-center">
                    <div className="flex justify-between items-center text-xs">
                        <p>Font Size</p>
                        <span>{fontSize}</span>
                    </div>
                    <input 
                    className="w-3/4 accent-violet-800"
                    type="range"
                    min={20}
                    max={100}
                    step={20}
                    value={fontSize}
                    onChange={ev => setFontSize(ev.target.value)}
                     />
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                <span>Outline Color : </span>
                <input 
                    type="color" 
                    value={outlineColor} 
                    onChange={ev => setOutlineColor(ev.target.value)} 
                />
                </div>

                {/* MarginV */}
                <div className="flex flex-col gap-1 justify-center">
                    <div className="flex justify-between items-center text-xs">
                    <p>Height of Text(from bottom)</p>
                    <span>{marginV}</span> 
                    </div>
                    <div className="relative">
                      <input 
                        className="w-3/4 accent-violet-800"
                        type="range"
                        min={50}
                        step={50}
                        max={250}
                        value={marginV}
                        onChange={ev => setMarginV(ev.target.value)}
                      />  
                    </div>

                </div>

                {/* Quality Checkbox */}
                <div className="flex items-center gap-3 relative"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}>
                    <span className="">High Quality : </span>
                    <div className='checkbox-wrapper-3'>
                        <input 
                            type="checkbox" id='cbx-3'
                            onChange={() => setQuality(quality === 'ultrafast' ? 'medium' : 'ultrafast')}
                        />
                        <label htmlFor="cbx-3" className="toggle"><span></span></label>
                    </div>
                    {showTooltip && (
                        <div className="tooltip flex gap-1 text-sm flex items-center border-2" style={{ position: 'absolute', left: '-5%', bottom: '100%', backgroundColor: '#9c7cdc', color: 'white', padding: '5px', borderRadius: '5px', whiteSpace: 'nowrap' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                            <span>Higher quality will take more time to build</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
                {progress && progress < 1 && (
                    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center">
                        <div className="w-full text-center">
                            <div className="bg-bg-gradient-from/50 mx-8 rounded-lg overflow-hidden relative">
                                <div className="bg-bg-gradient-from h-8 " style={{width: progress * 100 + '%'}}>
                                    <h3 className="text-white text-xl py-1 absolute inset-0">
                                        {parseInt(progress * 100)}%
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <video className="drop-shadow-2xl w-full bg-black"
                    data-video={0}
                    ref={videoRef}
                    controls
                >
                </video>
            </div>    
            
        </>
    );
}