declare global {
  interface ObjectConstructor {
    keys<T extends {}>(object: T): Array<keyof T>;
  }
}

export {};
