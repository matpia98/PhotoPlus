import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract-service';
import { Topic } from '../../models/topic/topic';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService extends AbstractService<Topic> {

  constructor(http: HttpClient, configService: ConfigService) {
    super(http, "topic", configService);
  }

  getAllFromSectionCode(sectionCode: string): Observable<Topic[]>{
    return this._http.get<Topic[]>(this.hostAddress + this.endpointUrl + "/bySection/" + sectionCode);
  }

  deleteOwn(topicCode: string): Observable<Topic>{
    return this._http.delete<Topic>(this.hostAddress + this.endpointUrl + "/deleteOwn/"+ topicCode);
  }

}
