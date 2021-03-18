# Course Data Configuration

## What is this?

Course data is the information for the upcoming semester. Specifically, it captures information on when things are happening
and what resources should be provided. You'll need to make sure all this information is correctly organized before
deploying the website. Fill out the course-data stuff first, then move onto content-structure.

## Stuff you'll be working with

All course data is located in the `static/course-data` folder. There are a few files that you should note here.

1. `general.config`: small file that currently just defines the start and end of the semester. Not the most important thing though.
2. `curriculum/content-structure`: a file that defines the order of content for the given semester.
3. `curriculum/<content>-data`: files that provide a mapping to links and labels for course content, e.g. links to lab page and checkoff.

## How the website uses content-structure + content-data

In a nutshell, the website uses content-structure as reference for how content is organized in a given semester. Each of its values
contains keys in the various content-data files, for different sections, and it'll use these keys to pull all the relevant links
you'd like to display on the site.

## How to define content-data

Adding/Updating stuff in content-data is simple. You just need to add a new key to the json file and make sure it has a title at the bare minimum.
For any links you'd like to display (like "lecture slides" or "solutions"), just add keys to the value:

```json
{
    "uniqueKey" : {
        "title" : "A title goes here",
        "linkKey1": "link url",
        "linkKey2": "link url"
    }
}
```

You can also add an array of links for any non-standard links you'd like to associate with a particular piece of content. These are usually extra resources
like additional notes. Instead of providing a string, you can just provide an array of objects with a "title", and "link" key.

```json
{
    "uniqueKey" : {
        "title": "Another title here",
        "linkKey1": "link url",
        "manyLinks" : [
            {
                "title" : "resource link 1",
                "link" : "url here"
            },
            {
                "title" : "resource link 2",
                "link" : "url here"
            }
        ]
    }
}
```

Once the links/data that you need for the semester exist here, you'll move on to defining `content-structure`, which describes
how this content is ordered.

## How content structure works

Here's how content-structure is organized

```yaml
Week Number:
    content category:
        - content key 1
        - content key 2
```

### Week Number

Week number is exactly what it is. It's explicitly defined instead of implicitly (in an array) for readability reasons.
There's stuff built that will automatically update the content each week based on the week number, and the content available
for that week.

### Content Category

You'll notice a lot of files that end with `-data`. Content category is the prefix for these data files, so "lectures", "labs", etc.
This key tells which data file to reference the keys with, so all of them must have a corresponding data file.

### Content Key

This is going to be one of the keys in your `-data` files.

### Empty Lists

You'll notice that categories are mapped to an empty array `[]`. This can be used if there's no content (yet) for a particular week.

### Quotes

Quotes need to be used if you have any kind of text with `": "` or `" -<string>"`, as this gets misinterpreted by yaml.

## Once you're done

Congrats, you did most of the work required in setting up... essentially the entire site. Assuming there are no changes required
from the interface, things like the front page and semester calendar should be working already. Next up are probably the syllabus
or staff page.

