import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { SignupDto, SigninDto } from './dto/authenticate.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Post('/signUp')
  signup(@Body() signup: SignupDto) {
    return this.authService.signup(signup);
  }
}
