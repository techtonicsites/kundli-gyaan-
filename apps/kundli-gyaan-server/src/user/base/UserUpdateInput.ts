/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CallRecordUpdateManyWithoutUsersInput } from "./CallRecordUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ConsultationUpdateManyWithoutUsersInput } from "./ConsultationUpdateManyWithoutUsersInput";
import { KundliUpdateManyWithoutUsersInput } from "./KundliUpdateManyWithoutUsersInput";
import { ReportUpdateManyWithoutUsersInput } from "./ReportUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { VisitUpdateManyWithoutUsersInput } from "./VisitUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CallRecordUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CallRecordUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CallRecordUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  callRecords?: CallRecordUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ConsultationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ConsultationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ConsultationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  consultations?: ConsultationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => KundliUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => KundliUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => KundliUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  kundlis?: KundliUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => ReportUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReportUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReportUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  reports?: ReportUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => VisitUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => VisitUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => VisitUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  visits?: VisitUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
