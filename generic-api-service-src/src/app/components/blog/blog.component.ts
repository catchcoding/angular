import { Component } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: [ './blog.component.css' ]
})
export class BlogComponent
{
    public $blogEntries = this.blogService.getBlogEntries();

    constructor(private blogService: BlogService)
    {
    }
}
