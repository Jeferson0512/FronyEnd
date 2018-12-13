export class Tecnico {
  constructor( _id= '' , fullnameTec= '' , emailTec = '', passwordTec = '', photoTec = '', phoneTec = 0, dniTec = 0) {
    this._id = _id,
    this.fullnameTec = fullnameTec;
    this.emailTec = emailTec;
    this.passwordTec = passwordTec;
    this.photoTec = photoTec;
    this.phoneTec = phoneTec;
    this.dniTec = dniTec;
  }
  _id: string;
  fullnameTec: string;
  emailTec: string;
  passwordTec: string;
  photoTec: string;
  phoneTec: number;
  dniTec: number;
}
