/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PredictionWhereInput } from "./PredictionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PredictionOrderByInput } from "./PredictionOrderByInput";

@ArgsType()
class PredictionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PredictionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PredictionWhereInput, { nullable: true })
  @Type(() => PredictionWhereInput)
  where?: PredictionWhereInput;

  @ApiProperty({
    required: false,
    type: [PredictionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PredictionOrderByInput], { nullable: true })
  @Type(() => PredictionOrderByInput)
  orderBy?: Array<PredictionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PredictionFindManyArgs as PredictionFindManyArgs };
