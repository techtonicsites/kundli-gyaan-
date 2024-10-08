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
import { KundliWhereUniqueInput } from "./KundliWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { KundliUpdateInput } from "./KundliUpdateInput";

@ArgsType()
class UpdateKundliArgs {
  @ApiProperty({
    required: true,
    type: () => KundliWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => KundliWhereUniqueInput)
  @Field(() => KundliWhereUniqueInput, { nullable: false })
  where!: KundliWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => KundliUpdateInput,
  })
  @ValidateNested()
  @Type(() => KundliUpdateInput)
  @Field(() => KundliUpdateInput, { nullable: false })
  data!: KundliUpdateInput;
}

export { UpdateKundliArgs as UpdateKundliArgs };
