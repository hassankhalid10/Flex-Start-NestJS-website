import { Controller, Get,Post,Req,Res, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()                                                        //home page get route
  @Render('home')
  root() {
    return { title: 'FlexStart - Home Page' };
  }

  @Post('/')                                                  //home page post route
  @Render('home')
  async contactPost(@Req() req, @Res() res) {
   const body = req.body;
   console.log(body)
   return { title: 'FlexStart - Contact Page' };
  }
 
}
