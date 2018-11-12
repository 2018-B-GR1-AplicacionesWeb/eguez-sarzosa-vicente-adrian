import {Get, Controller, HttpCode, InternalServerErrorException} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()  //decoradores
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get() // http://ip:puerto
    @HttpCode(204) // status
    raiz(): string {
        return 'Hola Mundo';
    }

    @Get('adiosMundo') // url
    adiosMundo(): string {
        return 'Adios Mundo';
    }

    @Get('adiosMundoPromesa') // url
    adiosMundoPromesa(): Promise<string> {
        const promesaAdios = (): Promise<string> => {
            return new Promise(
                (resolve) => {
                    resolve('Adios Mundo');
                }
            )
        };
        return promesaAdios();
    }


    @Get('adiosMundoAsync') // url
    @HttpCode(201)
    async adiosMundoAsync() {
        const promesaAdios = (): Promise<string> => {
            return new Promise(
                (resolve, reject) => {
                    reject('Adios Mundo');
                }
            )
        };
        try {
            const respuesta: string = await promesaAdios();
            return respuesta;
        } catch (e) {
            console.error(e);
            throw new InternalServerErrorException({mensaje: 'Error servidor'})
        }

    }


}
