export class BaseMapper<Domain, Entity> {
  fromEntityToDomain(entity: Entity): Domain {
    throw new Error('Not implemented');
  }
  fromDomainToEntity(domain: Domain): Entity {
    throw new Error('Not implemented');
  }
}
