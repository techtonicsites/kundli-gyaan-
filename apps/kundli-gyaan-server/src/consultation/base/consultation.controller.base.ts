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
import { ConsultationService } from "../consultation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ConsultationCreateInput } from "./ConsultationCreateInput";
import { Consultation } from "./Consultation";
import { ConsultationFindManyArgs } from "./ConsultationFindManyArgs";
import { ConsultationWhereUniqueInput } from "./ConsultationWhereUniqueInput";
import { ConsultationUpdateInput } from "./ConsultationUpdateInput";
import { PredictionFindManyArgs } from "../../prediction/base/PredictionFindManyArgs";
import { Prediction } from "../../prediction/base/Prediction";
import { PredictionWhereUniqueInput } from "../../prediction/base/PredictionWhereUniqueInput";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ConsultationControllerBase {
  constructor(
    protected readonly service: ConsultationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Consultation })
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createConsultation(
    @common.Body() data: ConsultationCreateInput
  ): Promise<Consultation> {
    return await this.service.createConsultation({
      data: {
        ...data,

        astrologer: data.astrologer
          ? {
              connect: data.astrologer,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        astrologer: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        status: true,
        time: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Consultation] })
  @ApiNestedQuery(ConsultationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async consultations(@common.Req() request: Request): Promise<Consultation[]> {
    const args = plainToClass(ConsultationFindManyArgs, request.query);
    return this.service.consultations({
      ...args,
      select: {
        astrologer: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        status: true,
        time: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Consultation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async consultation(
    @common.Param() params: ConsultationWhereUniqueInput
  ): Promise<Consultation | null> {
    const result = await this.service.consultation({
      where: params,
      select: {
        astrologer: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        status: true,
        time: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Consultation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateConsultation(
    @common.Param() params: ConsultationWhereUniqueInput,
    @common.Body() data: ConsultationUpdateInput
  ): Promise<Consultation | null> {
    try {
      return await this.service.updateConsultation({
        where: params,
        data: {
          ...data,

          astrologer: data.astrologer
            ? {
                connect: data.astrologer,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          astrologer: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          date: true,
          id: true,
          status: true,
          time: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Consultation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteConsultation(
    @common.Param() params: ConsultationWhereUniqueInput
  ): Promise<Consultation | null> {
    try {
      return await this.service.deleteConsultation({
        where: params,
        select: {
          astrologer: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          date: true,
          id: true,
          status: true,
          time: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/predictions")
  @ApiNestedQuery(PredictionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Prediction",
    action: "read",
    possession: "any",
  })
  async findPredictions(
    @common.Req() request: Request,
    @common.Param() params: ConsultationWhereUniqueInput
  ): Promise<Prediction[]> {
    const query = plainToClass(PredictionFindManyArgs, request.query);
    const results = await this.service.findPredictions(params.id, {
      ...query,
      select: {
        consultation: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/predictions")
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "update",
    possession: "any",
  })
  async connectPredictions(
    @common.Param() params: ConsultationWhereUniqueInput,
    @common.Body() body: PredictionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predictions: {
        connect: body,
      },
    };
    await this.service.updateConsultation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/predictions")
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "update",
    possession: "any",
  })
  async updatePredictions(
    @common.Param() params: ConsultationWhereUniqueInput,
    @common.Body() body: PredictionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predictions: {
        set: body,
      },
    };
    await this.service.updateConsultation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/predictions")
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "update",
    possession: "any",
  })
  async disconnectPredictions(
    @common.Param() params: ConsultationWhereUniqueInput,
    @common.Body() body: PredictionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      predictions: {
        disconnect: body,
      },
    };
    await this.service.updateConsultation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/reports")
  @ApiNestedQuery(ReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReports(
    @common.Req() request: Request,
    @common.Param() params: ConsultationWhereUniqueInput
  ): Promise<Report[]> {
    const query = plainToClass(ReportFindManyArgs, request.query);
    const results = await this.service.findReports(params.id, {
      ...query,
      select: {
        consultation: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "update",
    possession: "any",
  })
  async connectReports(
    @common.Param() params: ConsultationWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        connect: body,
      },
    };
    await this.service.updateConsultation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "update",
    possession: "any",
  })
  async updateReports(
    @common.Param() params: ConsultationWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        set: body,
      },
    };
    await this.service.updateConsultation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "update",
    possession: "any",
  })
  async disconnectReports(
    @common.Param() params: ConsultationWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        disconnect: body,
      },
    };
    await this.service.updateConsultation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
