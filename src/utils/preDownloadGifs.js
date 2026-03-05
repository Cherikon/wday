import {gifsUrl} from "../components/gifs";

export const preDownloadGifs = (setState) => {
    gifsUrl.forEach(async (gifUrl) => {
        const response = await fetch(location.href.includes('wday') ? `/wday${gifUrl}` : gifUrl);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64Data = reader.result;
            setState(gifUrl, base64Data);
        };

        reader.readAsDataURL(blob);
    })
}