import { Injectable } from "@nestjs/common";
import { PaymentIntentInputDto } from "./PaymentIntentInputDto";
import { PaymentIntentOutputDto } from "./PaymentIntentOutputDto";

@Injectable()
export class PaymentService {
  constructor() {}
  async CreatePaymentIntent(args: PaymentIntentInputDto): Promise<PaymentIntentOutputDto> {
    throw new Error("Not implemented");
  }
}
