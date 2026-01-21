import { apiService } from './api.service';
import { API_ENDPOINTS } from '../constants';
import { AuthResponse, LoginCredentials, RegisterData, User } from '../types';

export class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return apiService.post<AuthResponse>(API_ENDPOINTS.LOGIN, credentials);
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    return apiService.post<AuthResponse>(API_ENDPOINTS.REGISTER, data);
  }

  async logout(): Promise<void> {
    return apiService.post<void>(API_ENDPOINTS.LOGOUT);
  }

  async getProfile(): Promise<User> {
    return apiService.get<User>(API_ENDPOINTS.PROFILE);
  }

  async updateProfile(data: Partial<User>): Promise<User> {
    return apiService.put<User>(API_ENDPOINTS.UPDATE_PROFILE, data);
  }
}

export const authService = new AuthService();
