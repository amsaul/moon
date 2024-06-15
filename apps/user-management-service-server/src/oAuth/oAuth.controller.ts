import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OAuthService } from "./oAuth.service";
import { OAuthControllerBase } from "./base/oAuth.controller.base";

@swagger.ApiTags("oAuths")
@common.Controller("oAuths")
export class OAuthController extends OAuthControllerBase {
  constructor(protected readonly service: OAuthService) {
    super(service);
  }
}
