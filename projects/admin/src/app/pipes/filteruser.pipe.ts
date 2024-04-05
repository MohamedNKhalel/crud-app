import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'filteruser'
})
export class FilteruserPipe implements PipeTransform {

  transform(allTasks:Task[],word:string): Task[] {
    return allTasks.filter(task=>task.userId.username.toLowerCase().includes(word.toLowerCase()));
  }

}
