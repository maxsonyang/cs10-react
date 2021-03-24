# Configuring the UI

Unless you're planning on implementing a completely new component to the website, a lot of stuff can be directly configured by modifying the contents of `src/ui-config`. This should help reduce the time and complexity of configuring the website, while also adding a layer of protection against potentially rotten code/bad UI decisions.

## Navigation Bar and Quick Links

The Navigation Bar and the Quick Links (those links on the dashboard) are the easiest components of the website to configure. If you look at each page, there's a common pattern of including a "label" attribute, as well as a "path" attribute. Quick Links also include an additional icon attribute. These icons are pulled from [Material Design](https://material.io/resources/icons/?style=baseline), so feel free to browse around, then include the name of the icon you prefer.

### External vs. Internal Links

External links are pretty simple, you just need to add the url and you're good to go. For internal links, you need to make sure there's a corresponding `.jsx` file under `src/pages`. Once it exists, you just include `/<page name>` and Gatsby will link it at build time.

## UI Colors

This yaml file consists of content-key : hexcode mappings. To clarify, these keys correspond with the ones in `static/course-data/curriculum/content-structure.yml`. These colors determine the shade used for the tags on the dashboard + semester calendar.

## Staff UI Config

UI Config contains two attributes:

1. `roles`: Describes which labels are used for a role and who falls in these roles. Each value contains a label as well as an array of `people`, which are folder names in the staff folder.

2. `card-config`: Describes what information to display from a staff members' `bio.yaml` file. Subheader lets you configure which additional attribute in the bio to display on the card. Questions are the prompt questions typically included in the bios.

## Content Item Config

So this file's a bit more complicated because it's meant to offer as much flexibility in configuring the UI without actually requiring you to code/change components manually. This file describes templates for content-items displayed on the weekly/semester. The general structure looks something like this:

```yaml
content-key:
    label: label
    core-links:
        - key1
        - key2
    displayed-links: []
    extra-links: []
    static-contents: []
```

### Label

This one's pretty self-explanatory. This is generally a category of content like Lecture, Discussion, Lab, etc. Keep in mind these are used to label content on the website, so you should write something that makes sense with a number following it (e.g. "Lecture #" vs "Lectures #").

### Core Links

Core Links are links consistent across a certain content type. For example, discussions have worksheet and solution links consistent across all of them (for the most part). The actual values stored in the array correspond to keys in course data. For example:

#### Lab

discussion-data.json

```json
"welcome" : {
    "title" : "Welcome to CS10!",
    "worksheet" : "https://drive.google.com/file/d/1QAFZC-MBCK-0arrMzO9RSq_dUggCuEPf/view",
    "solutions" : "https://drive.google.com/file/d/179duY9PYYB-13XsheXoI5WI0NPgdF_DC/view?usp=sharing",
    "slides" : "https://drive.google.com/drive/folders/1Auyojr0XbhqtwjpTiHbnO9Kyx-AkbeyD?usp=sharing",
    "recording" : "https://www.youtube.com/playlist?list=PLFtj8IkGH5MK2wGnoWTKh0Vg8FEfJlvFz",
    "resources" : [
        {
            "title" : "GDrive recording mirror",
            "link" : "https://drive.google.com/drive/folders/1wvffS8_rGTbQUTevNXzgXQrM_0c6WoZk?usp=sharing"
        }
    ]
}
```

Corresponding content-item configuration

```yaml
discussion:
  ...
  core-links:
    worksheet:
      icon: create
      label: worksheet
    solutions:
      icon: done_all
      label: solutions
    slides:
      icon: slideshow
      label: slides
    recording:
      icon: videocam
      label: walkthrough
    live-recording:
      icon: videocam
      label: live recording
  ...
```

Note that each key in core-links corresponds with some other key in the discussion-data value. They also include include an icon and label similar to quick links (they also use quick link components). All Core Links will be displayed in the modal (the pop-over you get) when a particular piece of content is clicked on, but not necessarily on the dashboard. We'll talk about that next.

### Displayed Links

Displayed Links are links displayed on the right side of a piece of content. A distinction is made because there is limited space on the calendar, so there must be some sort of priority made. Note that the UI is designed to handle 2 displayed links, and going above that will cause some UI issues (specifically on mobile). This section only contains a list of keys.

Continuing with the discussion data example.

```yaml
displayed-links:
    - worksheet
    - solutions
    - live-recording # WHO DID THIS? WHO??
```

### Extra Links

Extra links are additional resources that aren't standardized across a piece of content. They're only available on the modal, and don't receive special styling like core links. For extra links, you need to provide a label and the key, as extra links are stored as an array in a `*-data` file. The label will describe the general category of all the links you provided (e.g. "Extra Resources" in discussion).

### Static Content

Static contents are similar to extra links in that they're non-standardized across resources. The main use case for these are for lab check-off questions, but you can display just about any kind of static content you want. You can provide an array in the `*-data` file, or you can also provide a block of text; the website will know how to handle it at build time.
