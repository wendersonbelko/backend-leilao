import { Role } from "@prisma/client";
import { RoleRepository } from "./role.repository";

export class RoleService {
  roleRepository: RoleRepository

  constructor() {
    this.roleRepository = new RoleRepository();
  }

  public createRole(payload: Partial<Role>) {
    return this.roleRepository.createRole(payload);
  }

  public getRole(id: number) {
    return this.roleRepository.getRole(id);
  }

  public updateRole(payload: Partial<Role>) {
    return this.roleRepository.updateRole(payload);
  }

  public deleteRole(id: number) {
    return this.roleRepository.deleteRole(id);
  }

  public listRole() {
    return this.roleRepository.listRole();
  }
}