export enum NotificationType {
  Success = "Success",
  InProgress = "InProgress",
  Error = "Error"
}

export class Notification {
  id?: string;
  title: string;
  message:string;
  type?: NotificationType = NotificationType.Success;
  clickHandler?: Function;
}
