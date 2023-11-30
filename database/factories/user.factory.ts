import { define } from "typeorm-seeding";
import { randEmail, randFullName, randPassword, randPhoneNumber } from '@ngneat/falso';
import { User } from "../../entities/iam/user.entity";

define(User, () => {
  const user = new User();
  user.id = null;
  user.fullname = randFullName();
  user.email = randEmail();
  user.phoneNumber = randPhoneNumber();
  user.password = randPassword();
  
  return user;
});