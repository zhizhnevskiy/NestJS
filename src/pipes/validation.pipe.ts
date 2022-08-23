import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exception/validation.exception';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if (metadata.metatype !== undefined) {
      const obj = plainToClass(metadata.metatype, value);
      const errors = await validate(obj);
      if (errors.length) {
        const messages = errors.map((err) => {
          let content = '';
          if (err.constraints) {
            content = Object.values(err.constraints).join(', ');
          }
          return `${err.property} - ${content}`;
        });
        throw new ValidationException(messages);
      }
    }
    return value;
  }
}
