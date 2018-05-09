import { Injectable } from '@angular/core';

import { types, getRoot, destroy, IModelType } from 'mobx-state-tree';

// export type ITodo = typeof Todo.Type;

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  get Todo() {
    return types
      .model({
        text: types.string,
        completed: false,
        id: types.identifier(types.number),
      })
      .actions((self) => ({
        remove() {
          getRoot(self).removeTodo(self);
        },
        edit(text: string) {
          self.text = text;
        },
        complete() {
          self.completed = !self.completed;
        },
      }));
  }
}
