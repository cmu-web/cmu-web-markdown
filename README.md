# Carnegie Mellon Web Markdown

Plain Markdown on GitHub Pages, in CMU style: Carnegie Mellon's web template,
with the [Carnegie Mellon Web Kit](https://cmu-web.github.io/cmu-web-kit/).
Write your docs the way you already do; they come out looking like cmu.edu.

## Use It

In your repository's `_config.yml`, name the theme and your site:

```yaml
remote_theme: cmu-web/cmu-web-markdown
title: Your Office or Project
description: A line under the name
```

Then turn on GitHub Pages for the repository, building from the branch and
folder that hold your Markdown. Every `.md` file becomes a page, and the first
heading in each is its title. A `README.md` becomes the home page.

## What You Get

| Markdown                         | On the Page                                      |
| -------------------------------- | ------------------------------------------------ |
| Each page                        | The CMU header, navigation, breadcrumbs, footer  |
| Tables                           | Striped tables, full width                       |
| Code blocks                      | Code boxes with a copy icon, as on GitHub        |
| `> [!NOTE]` and the other alerts | Labeled callouts                                 |
| Other block quotes               | Notes                                            |

See [Writing Pages](writing.md) for each one, and the settings you can change.

## License

BSD 3-Clause (see `LICENSE`), copyright Carnegie Mellon University. It
doesn't cover Carnegie Mellon's names and marks or its web template, which
the theme loads from www.cmu.edu.
