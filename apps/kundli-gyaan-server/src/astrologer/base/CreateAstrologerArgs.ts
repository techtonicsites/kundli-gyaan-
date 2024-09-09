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
import { AstrologerCreateInput } from "./AstrologerCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAstrologerArgs {
  @ApiProperty({
    required: true,
    type: () => AstrologerCreateInput,
  })
  @ValidateNested()
  @Type(() => AstrologerCreateInput)
  @Field(() => AstrologerCreateInput, { nullable: false })
  data!: AstrologerCreateInput;
}

export { CreateAstrologerArgs as CreateAstrologerArgs };
