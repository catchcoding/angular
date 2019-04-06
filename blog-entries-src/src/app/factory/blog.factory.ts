import { BlogEntry } from 'src/app/model/blog-entry.model';

export class BlogFactory
{
    public static createBlogEntry(object): BlogEntry
    {
        const blogEntry = new BlogEntry();

        blogEntry.id = object['id'];
        blogEntry.heading = object['heading'];
        blogEntry.preview = object['preview'];

        return blogEntry;
    }
}
