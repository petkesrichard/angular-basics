import { Component, OnInit } from '@angular/core';
import { JobsService } from 'services';
import { SkillsService} from "../../services/skills.service"
import { Response } from '@angular/http';

interface Job {
    name: string;
    description: string;
    requirements: object;
    benefits: string;
}

interface Skills {
    name: string;
    description: string;
}

@Component({
    selector: 'jobs-component',
    templateUrl: './jobs.component.html'
})
export class JobsComponent {

}