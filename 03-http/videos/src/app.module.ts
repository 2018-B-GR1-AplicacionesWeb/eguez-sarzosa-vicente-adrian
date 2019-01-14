import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {NoticiaService} from "./noticia/noticia.service";

import {TypeOrmModule} from '@nestjs/typeorm';
import {NoticiaEntity} from "./noticia/noticia-entity";
import {NoticiaModule} from "./noticia/noticia.module";
import {PaginaEntity} from "./pagina/pagina.entity";
import {ArticuloEntity} from "./articulo/articulo.entity";
import {UsuarioEntity} from "./usuario/usuario.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot(
            {
                type: 'mysql',
                host: '172.31.105.224',
                port: 32771,
                database: 'web',
                username: 'adrian',
                password: '12345678',
                synchronize: true,
                dropSchema: false,
                entities: [
                    NoticiaEntity,
                    PaginaEntity,
                    ArticuloEntity,
                    UsuarioEntity
                ]
            }
        ),
        NoticiaModule
    ],  // MODULOS
    controllers: [
        AppController
    ],  // Controllers
    providers: [
        AppService
    ], // Servicios
})
export class AppModule {
}

