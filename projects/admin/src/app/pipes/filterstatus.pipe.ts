import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'filterstatus'
})
export class FilterstatusPipe implements PipeTransform {

  transform(allTasks:Task[],word:string): Task[] {
    return allTasks.filter(task=>task.status.toLowerCase().includes(word.toLowerCase()));
  }

}
