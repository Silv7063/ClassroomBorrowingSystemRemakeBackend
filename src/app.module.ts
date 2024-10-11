import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { ClassroomModule } from "./classroom/classroom.module";
import { BorrowModule } from "./borrow/borrow.module";
import { DepartmentModule } from './department/department.module';

@Module({
	imports: [AuthModule, UserModule, ClassroomModule, BorrowModule, DepartmentModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
