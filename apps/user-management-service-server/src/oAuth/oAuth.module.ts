import { Module } from "@nestjs/common";
import { OAuthModuleBase } from "./base/oAuth.module.base";
import { OAuthService } from "./oAuth.service";
import { OAuthController } from "./oAuth.controller";
import { OAuthResolver } from "./oAuth.resolver";

@Module({
  imports: [OAuthModuleBase],
  controllers: [OAuthController],
  providers: [OAuthService, OAuthResolver],
  exports: [OAuthService],
})
export class OAuthModule {}
