# react-form-builder


> React form builder using json schema

[![NPM](https://img.shields.io/npm/v/react-form-builder.svg)](https://www.npmjs.com/package/@guidesmiths/react-form-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
## Install

```bash
npm install --save @guidesmiths/react-form-builder
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-form-builder'
import 'react-form-builder/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

# Live Playground

For examples of react-form-builder in action go to:

http://guidesmiths-react-form-builder.s3-website.eu-central-1.amazonaws.com/


# Formbuilder options
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   idForm*	|  Id for the form  	|  string 	|  '' 	|   	
|   form*	|  The json with the questions to create 	|  json  	|   -	|   	
|   onSubmit*    |   Action to be realized "onSubmit" form    |    function       |   -    |  
|   language	| Shortcut with the language  to render components in multiple languages (`country`,`date`) <br /> <br /> Available laguages: `es`,`de`,`fr`,`en`  	| string   	|   en	|   
|  isoCode      |   Isocode of the country to show as default in phone input |  string     | GB
|  CountryAndRegionsData    |  Json with the acronym(s) and the names of the countries that you want to display in the `countrySelect`    |   json    | -
|  onLinkOpen       |  function to be executed when there is a custom link  |  function     | - 

##### CountryAndRegionsData example:
```yaml
[
  { "countryName": "MyOwnCountry1", "countryShortCode": "MC1" },
  { "countryName": "MyOwnCountry2", "countryShortCode": "MC2" },
  { "countryName": "MyOwnCountry3", "countryShortCode": "MC3" },
  { "countryName": "MyOwnCountry4", "countryShortCode": "MC4" }
]
```

# Questions

### Checkbox
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	|  Checkbox name  	|  string 	|  - 	|   
|   type*   | Must be `checkbox`| string | - |
|   label	|  Text shown next to the checkbox. This text can be written in markdown style 	|  string  	|   ''	|   	
|   defaultChecked    |   Checked component by default    |    boolean       |   false   |
|   **errorMessages**	|    	| json   	|   	|   
|  required      |   Error message to display on submit if the checkbox is not checked and is required |  string     | ''
|  **registerConfig**       |    |  json     | 
| required  | Define if the checkbox is required  |  boolean  | false
#### Checkbox example
```yaml
{
  "name": "terms_and_conditions",
  "label": "This is the label of the checkbox with a [customLink](#customLink) and [normalLink]('shorturl.at/dFT25')",
  "defaultChecked": false,
  "errorMessages": {
    "required": "This field is required"
  },
  "registerConfig": {
    "required": true
  }
}

```
### Country
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	|  Country component name  	|  string 	|  - 	|   
|   type*   | Must be `country` | string | - |
|   label	|  Text shown over the coutnry list|  string  	|   ''	|   	
|   placeholder    |   Placeholder displayed in the select    |    string       |   ''   |
|   priorityOptions    |   Array of strings with shortcode(s) of the countries that want to be displayed first in the countries list. Ex: ['GB', 'ES']    |    string       |   '' | 
|   **errorMessages**	|    	| json   	|   	|   
|  required      |   Error message to display on submit if there is no country selected |  string     | ''
|  **registerConfig**       |    |  json     | 
| required  | Define if the country select is required  |  boolean  | false

#### Country example:
```yaml
{
  "name": "country_of_residence",
  "type": "country",
  "label": "This is the label of the country select",
  "placeholder": "Please select an option ^^",
  "priorityOptions": ["GB", "ES"],
  "errorMessages": {
    "required": "This field is required"
  },
  "registerConfig": {
    "required": true
  }
}
```

### Date
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	|  Date name component  	|  string 	|  - 	|   
|   type*   | Must be `date`| string | - |
|   label	|  Text shown over the  date input 	|  string  	|   ''	|   	
|   placeholder    |   Text to be displayed as placeholder in the date input     |    string       |   ''   | 
|   minAge    |   Minimun age that user should have to make the submit    |    int       |   ''   | 
|   dateFormat    |   Format to be applied in the date input    |    string       |   dd/MM/yyyy   | 
|   openToDate    |   Date in which the calendar will be opened. If this attribute is empty and we have a `minAge` attribute, the calendar will be opened -- `minAge` years ago since today to improve make it easier for the user. If we dont use this attribute the calendar will be opened in todays date   |    string       |   dd/MM/yyyy   | 
|   **errorMessages**	|    	| json   	|   	|   
|  required      |   Error message to display on submit if the date hasn't be selected and  is required |  string     | ''
|  underAge      |   Error message to display on submit if it is chosen a date  that represents a user younger than the minAge attribute |  string     | ''
|  **registerConfig**       |    |  json     | 
| required  | Define if the checkbox is required  |  boolean  | false

#### Date examples
Basic date example
```yaml
{
  "name": "dob",
  "type": "date",
  "label": "Date of birth",
  "placeholder": "dd/mm/yyyy",
  "openToDate": "1-1-2000",
  "errorMessages": {
    "required": "This field is required"
  },
  "registerConfig": {
    "required": true
  }
}
```
Minage date example
```yaml
{
  "name": "dob",
  "type": "date",
  "label": "Date of birth",
  "placeholder": "dd/mm/yyyy",
  "minAge": 18,
  "errorMessages": {
    "required": "This field is required",
    "underAge": "You must be 18 years old or above"
  },
  "registerConfig": {
    "required": true
  }
}

```


### Input
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	|  Input name  	|  string 	|  - 	|   
|   type*   | Must be `input`| string | - |
|   label	|  Text shown with the input |  string  	|   ''	|   	
|   placeholder    |   Placeholder text to be displayed   |    string       |   ''   | 
| **icon**  |   |  json  |   |
| name  | Name of the icon that we want to be displayed Opt: ['question-circle'] | string  |    -
|  fill  | Icon color  | string  | black
| **tooltip**  |   |  json  |   |
|  text |  Text to be displayed on icon hover | string  | ''
|   **errorMessages**	|    	| json   	|   	|   
|  required      |   Error message to display on submit if the checkbox is not checked and is required |  string     | ''
| pattern  | Error message to display if there is an error pattern in the input text  |  boolean  | false
|  **registerConfig**       |    |  json     | 
| required  | Define if the checkbox is required  |  boolean  | false
| pattern  | Define the pattern to check the input  |  string  | -

#### Input examples
Basic input example
```yaml
{
  "name": "email",
  "type": "input",
  "label": "",
  "placeholder": "Email Address*",
  "errorMessages": {
    "required": "This field is required"
  },
  "registerConfig": {
    "required": true
  }
}

```
Input with pattern control example
```yaml
{
  "name": "email",
  "type": "input",
  "label": "",
  "placeholder": "Email Address*",
  "errorMessages": {
    "required": "This field is required",
    "pattern": "Invalid email"
  },
  "registerConfig": {
    "required": true,
    "pattern": "/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/"
  }
}

```


### Markdown
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	|  markdown component name  	|  string 	|  - 	|   
|   type*   | must be **markdown**| string | - |
|   label	|  Text to be displayed, it will be formatted with markdown style	|  string  	|   ''	|   

#### Markdown examples
Markdown example

```yaml
{
    name: "Markdown component",
    type: "markdown",
    label: "El texto a **mostar** en el markdown [exmaple]()"
}

```

### MultipleCheckbox
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	| MultipleCheckBox name  |  string 	|  - 	|  
|   type*   | must be **multiple_checkboxes** | string | - |
|   label	|  Text to show like the question text |  string  	|   ''	| 
| **config**  |   | json  |   |
|  **options** |  |  json |     |
| options | It contains all the options to be rendered in the multicheckbox component |  Object Array | -
|  label or src |  The label displayed with the option (can use markdown format) or the src of the image to be rendered |  string  |  ''  |
|  value |  The value of the option |  string  |  ''  |
|   **errorMessages**	|    	| json   	|   	|   
|  required      |   Error message to display on submit if the multiplecheckbox is not checked and is required |  string     | ''
| minimumLen  | Text to be displayed in case not minimunLen items has been selected  |  string  | ''  |
| maximumLen  | Text to be displayed in case that more than maximumLen items has been selected  |  string  | ''  |
|  **registerConfig**       |    |  json     | 
| minimumLen | Minimum number of options that user must select  | int  | 0
| maximumLen | Maximum number of options that user can select  | int  | -
| required  | Define if the multiplecheckbox is required  |  boolean  | false

#### Multiplecheckbox examples
Basic multiplecheckbox
```yaml
{
  "name": "multiplecheckbox_name",
  "type": "multiple_checkboxes",
  "placeholder": "Please select all that apply",
  "label": "What option do you prefer?",
  "errorMessages": {
    "required": "This field is required"
  },
  "registerConfig": {
    "required": true
  },

  "config": {
    "options": [
      {
        "value": "option1",
        "label": "LabelOption1"
      },
      {
        "value": "option2",
        "label": "LabelOption2"
      },
      {
        "value": "option3",
        "label": "LabelOption3"
      }
    ]
  }
}
```
Multiplecheckbox with images and labels

```yaml
{
  "name": "multiplecheckbox_name",
  "type": "multiple_checkboxes",
  "placeholder": "Please select all that apply",
  "label": "What option do you prefer?",
  "errorMessages": {
    "required": "This field is required"
  },
  "registerConfig": {
    "required": true
  },

  "config": {
    "options": [
      {
        "value": "option1",
        "src": "/src/assets/image1"
      },
      {
        "value": "option2",
        "label": "LabelOption2"
      },
      {
        "value": "option3",
        "src": "/src/assets/image3"
      }
    ]
  }
}

```

Multiplecheckbox with minimumLen
```yaml
{
  "name": "multiplecheckbox_name",
  "type": "multiple_checkboxes",
  "placeholder": "Please select all that apply",
  "label": "What option do you prefer?",
  "errorMessages": {
    "required": "This field is required",
    "minimumLen": "You must choose at least two options"
  },
  "registerConfig": {
    "minimumLen": 2,
    "required": false
  },
  "config": {
    "options": [
      {
        "value": "option1",
        "label": "LabelOption1"
      },
      {
        "value": "option2",
        "label": "LabelOption2"
      },
      {
        "value": "option3",
        "label": "LabelOption3"
      }
    ]
  }
}
```

### Phone
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	|  Phone component name  	|  string 	|  - 	|  
|   type*   | must be `phone` | string | - |
|   label	|  Text to show over the input 	|  string  	|   ''	|   	
|   **errorMessages**	|    	| json   	|   	|   
|  required      |   Error message to display on submit if the phone input is not filled and is required |  string     | ''
|  **registerConfig**       |    |  json     | 
| required  | Define if the phone input is required  |  boolean  | false

Basic phone
```yaml
{
  "name": "phone",
  "type": "phone",
  "label": "",
  "registerConfig": {
    "required": false
  },
  "placeholder": "Phone (not compulsory)",
  "errorMessages": {
    "required": "This field is required"
  }
}
```
### RadioButton
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	|  RadioButton name  	|  string 	|  - 	|  
|   type*   | must be `radio`| string | - |
|   label	|  Text to show like the question text. This text can be written in markdown 	|  string  	|   ''	|   	
|   **errorMessages**	|    	| json   	|   	|   
|  required      |   Error message to display on submit if the checkbox is not checked and is required |  string     | ''
|  **registerConfig**       |    |  json     | 
| required  | Define if the radioButton is required  |  boolean  | false

#### RadioButton example
Basic radiobutton
```yaml
{
  "name": "radio_name",
  "label": "este es el texto de la pregunta",
  "type": "radio",
  "options": [
    {
      "value": true,
      "label": "YES"
    },
    {
      "value": false,
      "label": "NOP"
    }
  ],
  "errorMessages": {
    "required": "This field is required"
  },
  "registerConfig": {
    "required": true
  }
}

```

### Select
| Option  	| Description  	| Type |   Default	|   	
|---	|---	|:---:	|:---:	|	
|   name*	|  Checkbox name  	|  string 	|  - 	|   
|   type*   | must be `select`| string | - |
|   label	|  Text shown over the select question 	|  string  	|   ''	|   	
|   placeholder	| Placeholder text to be displayed in the select 	|  string  	|   ''	|   
| **config**  |   | json  |   |
|  **options** |  |  json |     |
| options | It contains all the options to be rendered in the select component |  Object Array | -
|  label |  The label displayed in select option |  string  |  ''  |
|  value |  The value of the select option |  string  |  ''  |
|   **errorMessages**	|    	| json   	|   	|   
|  required      |   Error message to display on submit if there is no selection and it is required |  string     | ''
|  **registerConfig**       |    |  json     | 
| required  | Define if the select is required  |  boolean  | false

#### Select examples

Select basic example

```yaml
{
  "name": "Género",
  "type": "select",
  "placeholder": "Please choose an option",
  "label": "What is your favorite color?",
  "errorMessages": {
    "required": "This field is required"
  },
  "registerConfig": {
    "required": true
  },
  "config": {
    "options": [
      {
        "value": "red",
        "label": "Red"
      },
      {
        "value": "black",
        "label": "Black"
      },
      {
        "value": "prefer_not_say",
        "label": "prefer not to say"
      }
    ]
  }
}

```

# To contribute

1. `npm install`
2. `npm start`
3. Open another tab and do `cd example`
4. `npm install`
5. `npm start`

See `localhost:3000`

Any change on the root src library will be reflected on the usage in the example folder.


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
 <td align="center"><a href="https://github.com/pablo-albaladejo"><img src="https://avatars.githubusercontent.com/u/7994467?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pablo Albaladejo</b></sub></a><br /><a href="https://github.com/guidesmiths/react-form-builder/commits?author=pablo-albaladejo" title="Code">💻</a> <a href="https://github.com/guidesmiths/react-form-builder/commits?author=pablo-albaladejo"title="Mentoring">🧑‍🏫</a>
    
<td align="center"><a href="https://github.com/ismaelocaramelo"><img src="https://avatars.githubusercontent.com/u/21059277?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ismael Bakkali</b></sub></a><br /><a href="https://github.com/guidesmiths/react-form-builder/commits?author=ismaelocaramelo" title="Code">💻</a>
<a href="https://github.com/guidesmiths/react-form-builder/issues?q=-reviewed-by%3Aismaelocaramelo" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/guidesmiths/react-form-builder/issues/created_by/ismaelocaramelo" title="Bug">🐛 </a></td>  
</td>
    
<td align="center"><a href="https://github.com/FranciscoValdesoiro"><img src="https://avatars.githubusercontent.com/u/45309269?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francisco Valdesoiro</b></sub></a><br /><a href="https://github.com/guidesmiths/react-form-builder/commits?author=FranciscoValdesoiro" title="Code">💻</a> <a href="https://github.com/guidesmiths/react-form-builder/commits?author=FranciscoValdesoiro" title="storyBooks">📓</a> <a href="https://github.com/guidesmiths/react-form-builder/issues/created_by/FranciscoValdesoiro" title="Bug">🐛 </a></td> 

<td align="center"><a href="https://github.com/ars1096"><img src="https://avatars.githubusercontent.com/u/79102959?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adrián Rodríguez</b></sub></a><br /><a href="https://github.com/guidesmiths/react-form-builder/commits?author=ardguezsoc" title="Code">💻</a> <a href="https://github.com/guidesmiths/react-form-builder/commits?author=ardguezsoc" 
title="Documentation">📖</a> <a href="https://github.com/guidesmiths/react-form-builder/commits?author=ardguezsoc" 
title="Test">⚠️</a> </td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [Guidesmiths](https://github.com/Guidesmiths)
