export class Config {
  static readonly Routes = {
    home: "/",
    detail: (id: string) => `/manga/${id}`,
    read: (id: string) => `/read/${id}`,
  };
}
