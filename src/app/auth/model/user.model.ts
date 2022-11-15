export class User {
  constructor(
    public email: string,
    public localId: string,
    private _token: string,
    private _expirationDate: Date
  ) {}

  get token() {
    if (new Date() > this._expirationDate) {
      return null;
    }
    return this._token;
  }
}
