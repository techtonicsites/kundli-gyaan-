/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { KundliWhereUniqueInput } from "../../kundli/base/KundliWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class KundliCreateNestedManyWithoutUsersInput {
  @Field(() => [KundliWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KundliWhereUniqueInput],
  })
  connect?: Array<KundliWhereUniqueInput>;
}

export { KundliCreateNestedManyWithoutUsersInput as KundliCreateNestedManyWithoutUsersInput };
