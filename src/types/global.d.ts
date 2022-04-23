declare global {
  interface ObjectConstructor {
    keys<T extends {}>(object: T): (keyof T)[];
  }
}

export {};
