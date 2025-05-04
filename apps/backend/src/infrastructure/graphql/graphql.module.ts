import { Module } from '@nestjs/common';
import { CompanyResolver } from './resolvers/company.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      autoSchemaFile: 'src/schema.graphql',
      definitions: {
        path: 'src/schema.generated.ts',
      },
    }),
  ],
})
export class GraphqlModule {}
