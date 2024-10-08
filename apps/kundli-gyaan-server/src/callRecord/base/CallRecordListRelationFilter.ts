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
import { CallRecordWhereInput } from "./CallRecordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CallRecordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CallRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => CallRecordWhereInput)
  @IsOptional()
  @Field(() => CallRecordWhereInput, {
    nullable: true,
  })
  every?: CallRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => CallRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => CallRecordWhereInput)
  @IsOptional()
  @Field(() => CallRecordWhereInput, {
    nullable: true,
  })
  some?: CallRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => CallRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => CallRecordWhereInput)
  @IsOptional()
  @Field(() => CallRecordWhereInput, {
    nullable: true,
  })
  none?: CallRecordWhereInput;
}
export { CallRecordListRelationFilter as CallRecordListRelationFilter };
