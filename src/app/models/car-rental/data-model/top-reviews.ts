export interface ITopReviews {
    _id: string;
    name: string;
    createdOn: string;
    renterReviews: {
      starRating: number;
    }
}

export class TopReviews implements ITopReviews {
    _id = '';
    name = '';
    createdOn = '';
    renterReviews: {
      starRating: 1;
    }
}
