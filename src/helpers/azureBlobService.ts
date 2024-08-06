
import { BlobServiceClient, StorageSharedKeyCredential, generateBlobSASQueryParameters, BlobSASPermissions } from '@azure/storage-blob';
import dotenv from 'dotenv';

dotenv.config();

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME || '';
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY || '';
const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || '';
const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    new StorageSharedKeyCredential(accountName, accountKey)
);

export async function generateSasUrl(blobName: string): Promise<string> {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);

    const permissions = new BlobSASPermissions();
    permissions.read = true;

    const expiresOn = new Date();
    expiresOn.setHours(expiresOn.getHours() + 1); // SAS expira en 1 hora

    const sas = generateBlobSASQueryParameters({
        containerName,
        blobName,
        permissions,
        expiresOn
    }, blobServiceClient.credential as StorageSharedKeyCredential);

    return `${blobClient.url}?${sas.toString()}`;
}

export async function uploadImageToAzure(file: Express.Multer.File): Promise<string> {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = `${Date.now()}-${file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadData(file.buffer, {
        blobHTTPHeaders: { blobContentType: file.mimetype }
    });

    return await generateSasUrl(blobName);
}
