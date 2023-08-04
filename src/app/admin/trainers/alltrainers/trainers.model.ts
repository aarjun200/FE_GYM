import { formatDate } from "@angular/common";
export class Trainers {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  specialization: string;
  mobile: string;
  department: string;
  degree: string;
  constructor(trainers) {
    {
      this.id = trainers.id || this.getRandomID();
      this.img = trainers.avatar || "assets/images/user/user1.jpg";
      this.name = trainers.name || "";
      this.email = trainers.email || "";
      this.date = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.specialization = trainers.specialization || "";
      this.mobile = trainers.mobile || "";
      this.department = trainers.department || "";
      this.degree = trainers.degree || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
