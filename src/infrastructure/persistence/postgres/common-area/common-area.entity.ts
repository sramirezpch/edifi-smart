import { Entity, ManyToOne, PrimaryKey, Property, Ref } from "@mikro-orm/core";
import { BuildingEntity } from "../building/building.entity";

@Entity({ tableName: 'common_area'})
export class CommonAreaEntity { 
    @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()'})
    id: string;

    @Property({ type: 'text', nullable: false})
    name: string;

    @Property({ type: 'integer', nullable: false})
    capacity: number;

    @Property({ type: 'boolean', default: true})
    enabled: boolean;

    @ManyToOne(() => BuildingEntity,{ ref: true})
    building: Ref<BuildingEntity>;
}