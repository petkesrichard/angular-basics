import { Component, OnInit } from '@angular/core';
import { JobsService } from 'services';
import { Response } from '@angular/http';

interface Job {
    name: string;
    description: string;
    requirements: string[];
}

@Component({
    selector: 'jobs-component',
    templateUrl: './jobs.component.html'
})
export class JobsComponent implements OnInit {

}