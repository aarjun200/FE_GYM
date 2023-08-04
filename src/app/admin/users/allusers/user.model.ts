export class User {
  id: number;
  img: string;
  name: string;
  gender: string;
  bGroup: string;
  date: string;
  address: string;
  mobile: string;
  treatment: string;
  constructor(user) {
    {
      this.id = user.id || this.getRandomID();
      this.img = user.avatar || "assets/images/user/user1.jpg";
      this.name = user.name || "";
      this.gender = user.gender || "male";
      this.bGroup = user.email || "";
      this.date = user.date || "";
      this.address = user.address || "";
      this.mobile = user.mobile || "";
      this.treatment = user.treatment || "";
    }
  }
  public getRandomID(): string {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
