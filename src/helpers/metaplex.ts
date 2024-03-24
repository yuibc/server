import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { nftStorageUploader } from '@metaplex-foundation/umi-uploader-nft-storage';
import {
    TokenStandard,
    createV1,
    fetchDigitalAsset,
    mintV1,
    mplTokenMetadata,
} from '@metaplex-foundation/mpl-token-metadata';
import {
    GenericFile,
    Pda,
    generateSigner,
    percentAmount,
} from '@metaplex-foundation/umi';
import { NFT_STORAGE_API_KEY } from 'src/config';
import { PublicKey } from '@solana/web3.js';

type TNFT = {
    name: string;
    uri: string;
    authority: string;
};

type TArtwork = {
    title: string;
    description: string;
    owner: string;
    artwork: GenericFile;
};

export function useMetaplexHelper() {
    const umi = createUmi('http://127.0.0.1:4000').use(mplTokenMetadata());

    umi.use(nftStorageUploader({ token: NFT_STORAGE_API_KEY }));

    const mint = generateSigner(umi);

    const uploadArtwork = async ({
        title,
        description,
        artwork,
        owner,
    }: TArtwork) => {
        const [uri] = await umi.uploader.upload([artwork]);
        return await umi.uploader.uploadJson({
            title,
            description,
            artwork: uri,
            owner,
        });
    };

    const fetchAsset = async () => await fetchDigitalAsset(umi, mint.publicKey);

    const createAccount = async ({ name, uri, authority }: TNFT) => {
        await createV1(umi, {
            mint,
            name,
            uri,
            sellerFeeBasisPoints: percentAmount(2.0),
            tokenStandard: TokenStandard.NonFungible,
        }).sendAndConfirm(umi);
    };

    const mintToken = async (tokenOwner: Pda | PublicKey) =>
        await mintV1(umi, {
            mint: mint.publicKey,
            amount: 1,
            tokenOwner,
            tokenStandard: TokenStandard.NonFungible,
        }).sendAndConfirm(umi);

    return {
        fetchAsset,
        uploadArtwork,
        createAccount,
        mintToken,
    };
}
