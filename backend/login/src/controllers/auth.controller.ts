// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {inject} from '@loopback/core';
import {
  post, Request,



  requestBody,



  RestBindings
} from '@loopback/rest';

/**
 * OpenAPI response for ping()
 */


export class AuthController {
  constructor(@inject(RestBindings.Http.REQUEST) public req: Request) {
  }
  @post('/auth')
  auth(
    @requestBody() reqParam: any
  ) {
    let isSuccess = false;
    if (reqParam && (reqParam.username === 'MTN_user' && reqParam.password === 'MTN281#^@*')) {
      isSuccess = true;
    }
    return {
      status: isSuccess
    };
  }
}
