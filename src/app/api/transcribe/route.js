import { GetTranscriptionJobCommand, StartTranscriptionJobCommand, TranscribeClient } from "@aws-sdk/client-transcribe";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";


function getClient() {
    return new TranscribeClient({
        region: 'eu-north-1',
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });
}

function createTranscribeCommand(filename) {
    return new StartTranscriptionJobCommand({ 
        TranscriptionJobName : filename,
        OutputBucketName: process.env.BUCKET_NAME,
        OutputKey: filename + '.transcription',
        IdentifyLanguage: true,
        Media: {
            MediaFileUri: 's3://' + process.env.BUCKET_NAME + '/' + filename,
        },
    });
}

async function creteTranscriptionJob(filename){
    const transcribeClient = getClient();
    const transcriptionCommand = createTranscribeCommand(filename);
    return transcribeClient.send(transcriptionCommand);
}

async function getJob(filename) {
    const transcribeClient = getClient();

    let jobStatusResult = null;
    try {
        const transcriptionJobStatusCommand = new GetTranscriptionJobCommand({
            TranscriptionJobName: filename,
        });
        jobStatusResult = await transcribeClient.send(transcriptionJobStatusCommand);
    } catch (err) {

    }
    return jobStatusResult;
}


async function streamToString(stream){
    const chunks = [];
    return new Promise((resolve, reject) => {
        stream.on('data', chunk => chunks.push(Buffer.from(chunk)));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        stream.on('error', reject);
    })

}

async function getTranscriptionFile (filename) {
    const transcriptionFile = filename + '.transcription' ;
    const s3client = new S3Client({
        region: "eu-north-1",
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });

    const getObjectCommand = new GetObjectCommand({
        Bucket : process.env.BUCKET_NAME,
        Key : transcriptionFile, 
    });

    let transcptionFileResponse = null;
    try {
        transcptionFileResponse = await s3client.send(getObjectCommand);
    } catch(e){};

    if(transcptionFileResponse) {
        return JSON.parse( 
            await streamToString(transcptionFileResponse.Body)
        );
    }

    return null;
}

export async function GET(req){
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const filename = searchParams.get('filename');

    // find ready transcription 
    const transcription = await getTranscriptionFile(filename);
    if(transcription) {
        return Response.json({
            status: 'COMPLETED',
            transcription,
        });
    }


    // check if already transcribed
    const existingJob = await getJob(filename);

    if(existingJob){
        return Response.json({
            status: existingJob.TranscriptionJob.TranscriptionJobStatus,
        });
    }

    // creating new transcribe job
    if (!existingJob) {
        const newJob = await creteTranscriptionJob(filename);
        return Response.json({
            status: newJob.TranscriptionJob.TranscriptionJobStatus, 
        });
    }

    return Response.json(null);
}
