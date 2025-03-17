import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract-service';
import { HttpClient } from '@angular/common/http';
import { Batch } from 'src/app/models/batch/batch';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class BatchService extends AbstractService<Batch> {

  constructor(httpClient: HttpClient, configService: ConfigService) {
    super(httpClient, "batch", configService);
  }
}
