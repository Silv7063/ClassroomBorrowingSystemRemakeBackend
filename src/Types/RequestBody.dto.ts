import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";
import { Roles } from "./Types.ts";
import { Type } from "class-transformer";

export class BaseUserRequestData {
  @IsString()
  @IsNotEmpty()
  public readonly userId: string;
}

export class InsertUserData {
  @IsString()
  @IsNotEmpty()
  public readonly departmentId: string;

  @IsString()
  @IsNotEmpty()
  public readonly username: string;

  @IsString()
  @IsNotEmpty()
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  public readonly password: string;

  @IsString()
  @IsNotEmpty()
  public readonly job: string;

  @IsString()
  @IsNotEmpty()
  public readonly extension: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Roles)
  public readonly role: Roles;
}

export class UpdateUserPasswordData extends BaseUserRequestData {
  @IsString()
  @IsNotEmpty()
  public readonly oldPassword: string;

  @IsString()
  @IsNotEmpty()
  public readonly newPassword: string;

  @IsString()
  @IsOptional()
  public readonly confirmPassword?: string;
}

export class UpdateUserData extends BaseUserRequestData {
  @IsString()
  @IsOptional()
  public readonly departmentId?: string;

  @IsString()
  @IsOptional()
  public readonly username?: string;

  @IsString()
  @IsOptional()
  public readonly email?: string;

  @IsString()
  @IsOptional()
  public readonly job?: string;

  @IsString()
  @IsOptional()
  public readonly extension?: string;

  @IsString()
  @IsOptional()
  @IsEnum(Roles)
  public readonly role?: Roles;
}

export class DeleteUserData extends BaseUserRequestData {}

export class BaseClassroomRequestData {
  @IsString()
  @IsNotEmpty()
  public readonly classroomId: string;
}

export class InsertClassroomData {
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @IsString()
  @IsNotEmpty()
  public readonly place: string;

  @IsString()
  @IsNotEmpty()
  public readonly description: string;
}

export class DeleteClassroomData extends BaseClassroomRequestData {}

export class UpdateClassroomData extends BaseClassroomRequestData {
  @IsString()
  @IsOptional()
  public readonly name?: string;

  @IsString()
  @IsOptional()
  public readonly place?: string;

  @IsString()
  @IsOptional()
  public readonly description?: string;
}

export class BaseBorrowRequestData extends BaseUserRequestData {
  @IsString()
  @IsNotEmpty()
  public readonly borrowId: string;
}

export class InsertBorrowData {
  @IsString()
  @IsNotEmpty()
  public readonly userId: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  public readonly startTime: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  public readonly endTime: Date;

  @IsInt()
  @IsNotEmpty()
  @Max(8)
  @Min(0)
  public readonly from: number;

  @IsInt()
  @IsNotEmpty()
  @Max(8)
  @Min(0)
  public readonly to: number;

  @IsString()
  @IsNotEmpty()
  public readonly classroomId: string;
}

export class DeleteBorrowData extends BaseBorrowRequestData {}

export class BaseDepartmentRequestData {
  @IsString()
  @IsNotEmpty()
  public readonly departmentId: string;
}

export class InsertDepartmentData {
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @IsString()
  @IsNotEmpty()
  public readonly description: string;

  @IsString()
  @IsNotEmpty()
  public readonly location: string;
}

export class UpdateDepartmentData extends BaseDepartmentRequestData {
  @IsString()
  @IsOptional()
  public readonly name?: string;

  @IsString()
  @IsOptional()
  public readonly description?: string;

  @IsString()
  @IsOptional()
  public readonly location?: string;
}

export class DeleteDepartmentData extends BaseDepartmentRequestData {}
