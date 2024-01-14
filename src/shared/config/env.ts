import { plainToClass } from 'class-transformer';
import { IsNotEmpty, IsString, NotEquals, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  dbUrl: string;

  @IsString()
  @IsNotEmpty()
  @NotEquals('unsecure_jtw_secrete')
  jwtSecret: string;
}

export const env: Env = plainToClass(Env, {
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DATABASE_URL,
});

const errors = validateSync(env);

if (errors.length > 0) throw new Error(JSON.stringify(errors, null, 2));
