
  export interface ICarouselData {
    id?: string;
    text: string;
    dataMerge?: number;
    width?: number;
    dotContent?: string;
    src?: string;
    dataHash?: string;
  }


  export class CarouselData implements ICarouselData {
    id = '';
    text = '';
    dataMerge = 0;
    width = 0;
    dotContent = '';
    src = '';
    dataHash = '';
  }




