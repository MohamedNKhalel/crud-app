import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'filterdeadline'
})
export class FilterdeadlinePipe implements PipeTransform {

  transform(allTasks:Task[],word:string): Task[] {
    return allTasks.filter(task=>task.deadline.split("-").reverse().join("-").includes(word.toLowerCase()));
  }

}
