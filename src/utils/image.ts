export function getImagePath(image: string){
    const cloudinaryBaseURL = 'https://res.cloudinary.com';

    if(image.startsWith(cloudinaryBaseURL)){
        return image;
    }else{
        return `${process.env.API_URL}/img/${image}`;
    }
}