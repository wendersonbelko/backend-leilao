import { UserRepository } from "./user.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async FindOrCreate(payload: User.User) {
    const user = await this.userRepository.FindOrCreate(payload);

    return user;
  }

  public async FindByUsername(username: string) {
    const user = await this.userRepository.FindByUsername(username);

    return user;
  }
}