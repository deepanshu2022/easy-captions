import TranscriptionItem from "./TranscriptionItem"
export default function TranscriptionEditor({awsTranscriptionItems,setAwsTranscriptionItems}) {
    
    function updateTranscriptionItems(index, prop, ev){
        const newAwsItems= [...awsTranscriptionItems];
        const newItem = {...newAwsItems[index]}
        newItem[prop] = ev.target.value;
        newAwsItems[index] = newItem;
        setAwsTranscriptionItems(newAwsItems);
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-1 sticky top-0 bg-violet-800/80 p-1 rounded-md ">
                <div className="">From </div>
                <div className="">End </div>
                <div className="">Content</div>
            </div>
            {awsTranscriptionItems.length > 0 && (
                <div className="h-64 sm:h-auto overflow-y-scroll sm:overflow-auto">
                    {awsTranscriptionItems.map((item,key) => (
                        <div key={key}>
                            <TranscriptionItem 
                            handleStartTimeChange={ev => updateTranscriptionItems(key,'start_time',ev)}
                            handleEndTimeChange={ev => updateTranscriptionItems(key,'end_time',ev)}
                            handleContentChange={ev => updateTranscriptionItems(key,'content',ev)}
                            item={item} />
                        </div>
                     ))}
                </div>
            )}
        </>
    )
}

