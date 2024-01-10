import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

//aca tendremos los imports/los controladores y los providers

@Module({
    
    controllers: [TaskController],
    providers: [TaskService],
    
})
export class TaskModule {}
