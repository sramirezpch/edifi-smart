import { Tenant } from '../entities/tenant.entity';
import { User } from '../entities/user.entity';

export type GetUsersParams = Partial<Pick<User, 'role'>>;

export type GetTenantsParams = Partial<
  Pick<Tenant, 'countryCode' | 'adminAreaLevel1' | 'adminAreaLevel2'>
>;
