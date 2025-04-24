import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { RepositoriesModule } from './database/repositories/repositories.module';
import { GraphqlModule } from './graphql/graphql.module';
import { CompanyResolver } from './graphql/resolvers/company.resolver';
import { UserResolver } from './graphql/resolvers/user.resolver';
import companyUC from 'src/application/use-cases/company';
import userUC from 'src/application/use-cases/user';
import buildingUC from 'src/application/use-cases/building';
import apartmentUC from 'src/application/use-cases/apartment';
import { BuildingResolver } from './graphql/resolvers/building.resolver';
import { ApartmentResolver } from './graphql/resolvers/apartment.resolver';

@Module({
  imports: [DatabaseModule, RepositoriesModule, GraphqlModule],
  providers: [
    ...companyUC,
    ...userUC,
    ...buildingUC,
    ...apartmentUC,
    CompanyResolver,
    UserResolver,
    BuildingResolver,
    ApartmentResolver,
  ],
})
export class InfrastructureModule {}
