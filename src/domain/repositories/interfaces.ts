import { Company } from '../entities/company.entity';
import { User } from '../entities/user.entity';

export type GetUsersParams = Partial<Pick<User, 'role'>>;

export type GetCompanyParams = Partial<Pick<Company, 'enabled'>>;
