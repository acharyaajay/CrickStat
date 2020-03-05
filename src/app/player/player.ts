export interface Player {
    id: number;
    name: string;
    gender: string;
    email?: string;
    phoneNumber?: string;
    contactPreference: string;
    dateOfBirth: Date;
    active: boolean;
    photoPath?: string;
  }