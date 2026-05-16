export interface data {
  name: string;
  email: string;
  // password: string;
  role: string;
  phone?: string;
  location?: string;
  profile?: string;
  lastLogin?: string;
  lastSeen?: string;
  onlineStatus?: string;
  socketId?: string;
}

export interface initialInterface {
  err: string;
  data: data;
  loading: boolean,
  success: boolean;
}
