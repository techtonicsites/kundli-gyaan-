import * as graphql from "@nestjs/graphql";
import { PaymentIntentInputDto } from "./PaymentIntentInputDto";
import { PaymentIntentOutputDto } from "./PaymentIntentOutputDto";
import { PaymentService } from "./payment.service";

export class PaymentResolver {
  constructor(protected readonly service: PaymentService) {}

  @graphql.Mutation(() => PaymentIntentOutputDto)
  async CreatePaymentIntent(
    @graphql.Args()
    args: PaymentIntentInputDto
  ): Promise<PaymentIntentOutputDto> {
    return this.service.CreatePaymentIntent(args);
  }
}
