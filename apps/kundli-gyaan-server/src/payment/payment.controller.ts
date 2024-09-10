import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentService } from "./payment.service";
import { PaymentIntentInputDto } from "./PaymentIntentInputDto";
import { PaymentIntentOutputDto } from "./PaymentIntentOutputDto";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentController {
  constructor(protected readonly service: PaymentService) {}

  @common.Post("/create-payment-intent")
  @swagger.ApiOkResponse({
    type: PaymentIntentOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePaymentIntent(
    @common.Body()
    body: PaymentIntentInputDto
  ): Promise<PaymentIntentOutputDto> {
        return this.service.CreatePaymentIntent(body);
      }
}
