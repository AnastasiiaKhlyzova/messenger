export interface SignUpRequest {
  [key: string]: string;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SignInRequest {
  login: string;
  password: string;
  [key: string]: string;
}

export interface CreateChatRequest {
  title: string;
}

export interface AddUsersRequest {
  users: number[];
  chatId: number;
}
export interface DeleteUserFromChatRequest {
  users: number[];
  chatId: number;
}

export interface UpdateProfileRequest {
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  email?: string;
  phone?: string;
  [key: string]: string | undefined;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
export interface UserSearchRequest {
  login: string;
}
