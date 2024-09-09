/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VisitService } from "../visit.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VisitCreateInput } from "./VisitCreateInput";
import { Visit } from "./Visit";
import { VisitFindManyArgs } from "./VisitFindManyArgs";
import { VisitWhereUniqueInput } from "./VisitWhereUniqueInput";
import { VisitUpdateInput } from "./VisitUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VisitControllerBase {
  constructor(
    protected readonly service: VisitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Visit })
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVisit(@common.Body() data: VisitCreateInput): Promise<Visit> {
    return await this.service.createVisit({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        serviceRequested: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        visitDate: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Visit] })
  @ApiNestedQuery(VisitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visits(@common.Req() request: Request): Promise<Visit[]> {
    const args = plainToClass(VisitFindManyArgs, request.query);
    return this.service.visits({
      ...args,
      select: {
        createdAt: true,
        id: true,
        serviceRequested: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        visitDate: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Visit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visit(
    @common.Param() params: VisitWhereUniqueInput
  ): Promise<Visit | null> {
    const result = await this.service.visit({
      where: params,
      select: {
        createdAt: true,
        id: true,
        serviceRequested: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        visitDate: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Visit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVisit(
    @common.Param() params: VisitWhereUniqueInput,
    @common.Body() data: VisitUpdateInput
  ): Promise<Visit | null> {
    try {
      return await this.service.updateVisit({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          serviceRequested: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          visitDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Visit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVisit(
    @common.Param() params: VisitWhereUniqueInput
  ): Promise<Visit | null> {
    try {
      return await this.service.deleteVisit({
        where: params,
        select: {
          createdAt: true,
          id: true,
          serviceRequested: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          visitDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
