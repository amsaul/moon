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
import { ExerciseWhereInput } from "./ExerciseWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ExerciseOrderByInput } from "./ExerciseOrderByInput";

@ArgsType()
class ExerciseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ExerciseWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ExerciseWhereInput, { nullable: true })
  @Type(() => ExerciseWhereInput)
  where?: ExerciseWhereInput;

  @ApiProperty({
    required: false,
    type: [ExerciseOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ExerciseOrderByInput], { nullable: true })
  @Type(() => ExerciseOrderByInput)
  orderBy?: Array<ExerciseOrderByInput>;

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

export { ExerciseFindManyArgs as ExerciseFindManyArgs };
