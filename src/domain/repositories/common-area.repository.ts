import { CommonArea } from "../entities/common-area.entity";

export interface ICommonAreaRepository { 
    insert(domain: CommonArea): Promise<{ id: string}>
}