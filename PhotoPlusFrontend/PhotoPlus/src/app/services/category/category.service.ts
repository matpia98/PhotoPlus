import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from '../../models/category/category';
import { AbstractService } from '../abstract-service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends AbstractService<Category> {

  constructor(http: HttpClient, configService: ConfigService) {
    super(http, 'category', configService);
  }
}
