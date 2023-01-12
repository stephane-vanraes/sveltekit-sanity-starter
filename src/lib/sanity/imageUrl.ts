import imageUrlBuilder from '@sanity/image-url'
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

const builder = imageUrlBuilder({ 
    projectId: PUBLIC_SANITY_PROJECT_ID, 
    dataset: PUBLIC_SANITY_DATASET 
})

export default (source : SanityImageSource) : ImageUrlBuilder => builder.image(source);