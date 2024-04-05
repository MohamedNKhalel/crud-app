import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(alltasks:Task[],word:string): Task[] {
    return alltasks.filter(task=>task.title.toLowerCase().includes(word.toLowerCase())) 
  }

}
