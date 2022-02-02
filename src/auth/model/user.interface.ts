import { FeedPost } from '../../feed/models/post.Interface';
import { Role } from './role.enum';

export interface IUser {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  confirmed: boolean;
  password?: string;
  imagePath?: string;
  role?: Role;
  posts?: FeedPost;
}
