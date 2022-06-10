
interface IImagePaths {
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  detail: string;
  hd: string;
}

export interface IPicture {
    tagCode: string;
    name: string;
    order: number;
    tagDisplayName: string;
    path: string;
    imagePaths: IImagePaths;
}

export class Picture implements IPicture {
    tagCode: string;
    name: string;
    order: number;
    tagDisplayName: string;
    path: string;
    imagePaths: IImagePaths;
}
