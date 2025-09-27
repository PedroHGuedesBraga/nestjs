import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { CreateGerenteDto } from './dto/create-gerente.dto';
import { UpdateGerenteDto } from './dto/update-gerente.dto';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post()
  create(@Body() createGerenteDto: CreateGerenteDto) {
    return this.gerenteService.create(createGerenteDto);
  }

  @Get()
  findAll() {
    return this.gerenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gerenteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGerenteDto: UpdateGerenteDto) {
    return this.gerenteService.update(id, updateGerenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gerenteService.remove(id);
  }
}
