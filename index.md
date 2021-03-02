## Welcome to GitHub Pages

You can use the [test](javascript%3Avar%20CHECK_SLOTS_URL%3D%22https%3A%2F%2Fwww.riteaid.com%2Fservices%2Fext%2Fv2%2Fvaccine%2FcheckSlots%22%3B%24%28%27.appt-check-status%27%29.remove%28%29%3B%24%28%27.covid-store__store%27%29.each%28function%28%29%7B%09var%20desc%20%3D%20%24%28this%29.find%28%27.copy-body%27%29.text%28%29%3B%09var%20num%20%3D%20desc.substring%28desc.indexOf%28%27%23%27%29%2B1%2Cdesc.indexOf%28%27%20%28%27%29%29%3B%09var%20self%20%3D%20this%3B%09var%20store%20%3D%20%24%28this%29.find%28%27.covid-store__store__icon%27%29%3B%09%24.get%28%20CHECK_SLOTS_URL%2C%20%7B%20storeNumber%3A%20num%7D%2C%20function%28%20data%20%29%20%7B%09%20%20%09%20%20if%28data.Data.slots%5B1%5D%20%3D%3D%20true%29%7B%09%09console.log%28%27store%20%27%20%2B%20num%20%2B%20%27%20may%20have%20appointments%27%29%3B%09%09store.append%28%27%3Cspan%20title%3D%22Appointsment%20may%20be%20available%22%20class%3D%22appt-check-status%22%3E%3Cbr%2F%3E%3Ci%20class%3D%22fas%20fa-check-circle%20fa-2x%22%20style%3D%22color%3Agreen%3B%22%3E%3C%2Fi%3E%3C%2Fspan%3E%27%29%3B%09%20%20%7D%20else%20%7B%09%09store.append%28%27%3Cspan%20title%3D%22No%20appointments%20are%20available%22%20class%3D%22appt-check-status%22%3E%3Cbr%2F%3E%3Ci%20class%3D%22fas%20fa-times-circle%20fa-2x%22%3E%3C%2Fi%3E%3C%2Fspan%3E%27%29%3B%09%20%20%7D%09%7D%29%3B%09%09%7D%29%3B) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/rivermeow/covid-vaccine-tools/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
