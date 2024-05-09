'use client';
import {clearTranscriptionItems} from "@/libs/awsTrancriptionHelpers";
import axios from "axios";
import { useEffect, useState } from "react";
import ResultVideo from "@/Components/ResultVideo";
import TranscriptionEditor from "@/Components/TransciptionEditor";


export default function FilePage({params}) {
    const filename = params.filename;
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [isFetchingInfo, setIsFetchingInfo] =useState(false);
    const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);

    useEffect(() => {
        getTranscription();
    } , [filename]);

    function getTranscription() {
        setIsFetchingInfo(true);
        axios.get('/api/transcribe?filename='+filename).then(response => {
            setIsFetchingInfo(false);
            const status = response.data?.status;
            const transcription = response.data?.transcription;

            if (status === 'IN_PROGRESS') {
                setIsTranscribing(true);
                setTimeout(getTranscription,3000);
            }else{
                setIsTranscribing(false);
                
                setAwsTranscriptionItems(
                    clearTranscriptionItems(transcription.results.items)
                );
            };
        });
    }

    if(isTranscribing) {
        return(
            <div className="flex flex-col items-center justify-center">
                <h2>Transcribing Your Video...</h2>
                <h4>It might take a second or two</h4>
            </div>
        )
    }

    if(isFetchingInfo){
        return (
            <div>
                Fetching Information...
            </div>
        );
    };

    return (
        <div >
            <div className="grid sm:grid-cols-2 gap-8 mb-8 sm:gap-16">
                <div className="">
                    <h2 className="text-2xl mb-2 text-white/70">Transcripted Text</h2>
                    <TranscriptionEditor 
                        awsTranscriptionItems={awsTranscriptionItems} 
                        setAwsTranscriptionItems={setAwsTranscriptionItems}
                         
                    />
                </div>
                <div className=""> 
                    <h2 className="text-2xl mb-4 text-white/70">Captions are ready to be Applied</h2>
                    <ResultVideo filename={filename} transcriptionItems={awsTranscriptionItems} />
                </div>
            </div>
        </div>
    )
}