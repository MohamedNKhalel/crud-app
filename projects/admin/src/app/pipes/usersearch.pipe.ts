import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'usersearch'
})
export class UsersearchPipe implements PipeTransform {

  transform(user:User[],word:string): User[] {
    return user.filter(user=>user.username.toLowerCase().includes(word.toLowerCase()));
  }


}
