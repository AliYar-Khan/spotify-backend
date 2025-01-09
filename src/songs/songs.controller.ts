import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly appService: SongsService) {}

  @Get()
  findAll(): string {
    return 'Fetch all songs';
  }

  @Get(':id')
  findOne(@Req() request: Request): string {
    return 'Found song';
  }

  @Post()
  addNewSong(): string {
    return 'Added a new song';
  }

  @Delete(':id')
  deleteOne(@Req() request: Request): string {
    return 'Deleted the song';
  }

  @Put(':id')
  updateOne(@Req() request: Request): string {
    return 'Update the song';
  }
}
