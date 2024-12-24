export * from './adminController.service';
import { AdminControllerService } from './adminController.service';
export * from './studentController.service';
import { StudentControllerService } from './studentController.service';
export const APIS = [AdminControllerService, StudentControllerService];
