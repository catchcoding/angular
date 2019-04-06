import { Injectable } from '@angular/core';
import { BlogEntry } from 'src/app/model/blog-entry.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';
import { BlogFactory } from 'src/app/factory/blog.factory';

@Injectable({
    providedIn: 'root'
})
export class BlogService
{
    constructor(private api: ApiService)
    {
    }


    public getBlogEntries(): Observable<BlogEntry[]>
    {
        return this.api.get<BlogEntry[]>('/assets/blog-entries.json')
            .pipe(
                map(data => data.map(entry => BlogFactory.createBlogEntry(entry)))
            );
    }
}
