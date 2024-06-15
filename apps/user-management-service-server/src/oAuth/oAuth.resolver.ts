import * as graphql from "@nestjs/graphql";
import { OAuthResolverBase } from "./base/oAuth.resolver.base";
import { OAuth } from "./base/OAuth";
import { OAuthService } from "./oAuth.service";

@graphql.Resolver(() => OAuth)
export class OAuthResolver extends OAuthResolverBase {
  constructor(protected readonly service: OAuthService) {
    super(service);
  }
}
