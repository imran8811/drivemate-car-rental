export interface IFacebookResponse {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
  authToken: string;
  facebook: {
    name: string;
    email: string;
    picture: {
      data: {
        height: number;
        is_silhouette: boolean;
        url: string;
        width: number;
      }
    }
    first_name: string;
    last_name: string;
    id: string;
  }
  provider: string;
}

export class FacebookResponse implements IFacebookResponse {
  id = '';
  name = '';
  email = '';
  photoUrl = '';
  firstName = '';
  lastName = '';
  authToken = '';
  facebook = {
    name: '',
    email: '',
    picture: {
      data: {
        height: 0,
        is_silhouette: false,
        url: '',
        width: 0
      }
    },
    first_name: '',
    last_name: '',
    id: ''
  }
  provider = '';
}
