/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Exercise } from "./Exercise";
import { ExerciseCountArgs } from "./ExerciseCountArgs";
import { ExerciseFindManyArgs } from "./ExerciseFindManyArgs";
import { ExerciseFindUniqueArgs } from "./ExerciseFindUniqueArgs";
import { CreateExerciseArgs } from "./CreateExerciseArgs";
import { UpdateExerciseArgs } from "./UpdateExerciseArgs";
import { DeleteExerciseArgs } from "./DeleteExerciseArgs";
import { ExerciseService } from "../exercise.service";
@graphql.Resolver(() => Exercise)
export class ExerciseResolverBase {
  constructor(protected readonly service: ExerciseService) {}

  async _exercisesMeta(
    @graphql.Args() args: ExerciseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Exercise])
  async exercises(
    @graphql.Args() args: ExerciseFindManyArgs
  ): Promise<Exercise[]> {
    return this.service.exercises(args);
  }

  @graphql.Query(() => Exercise, { nullable: true })
  async exercise(
    @graphql.Args() args: ExerciseFindUniqueArgs
  ): Promise<Exercise | null> {
    const result = await this.service.exercise(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Exercise)
  async createExercise(
    @graphql.Args() args: CreateExerciseArgs
  ): Promise<Exercise> {
    return await this.service.createExercise({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Exercise)
  async updateExercise(
    @graphql.Args() args: UpdateExerciseArgs
  ): Promise<Exercise | null> {
    try {
      return await this.service.updateExercise({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Exercise)
  async deleteExercise(
    @graphql.Args() args: DeleteExerciseArgs
  ): Promise<Exercise | null> {
    try {
      return await this.service.deleteExercise(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
