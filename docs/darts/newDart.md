For dart, you need to add json and UI schemas

To do this, you need to add schemas to the core table.DartJsonSchema

**example JSON SCHEMA**
````
{
  "type": "object",
  "properties": {
    "S00304_BaseProfiles": {
      "type": "string",
      "title": "Base profiles:"
    },
    "S00304_AddoOnProfiles": {
      "type": "string",
      "title": "Add On profiles:"
    },
    "S00304_ProfileSequence": {
      "type": "string",
      "title": "Profile sequence:"
    },
    "S00304_SequenceDetails": {
      "type": "string",
      "title": "Sequence id and details:"
    },
    "S00304_VariableIdConfig": {
      "type": "string",
      "title": "Variable configuration:"
    },
    "S00304_ProfileSched": {
      "type": "string",
      "title": "Profile Scheduler:"
    },
    "S00304DynamicProfileConf": {
      "type": "string",
      "title": "Dynamic profile configuration:"
    }
  }
}

````
**Example UI SCHEMA**

````
{
  "S00304_BaseProfiles": {
    "ui:widget": "textarea"
  },
  "S00304_AddoOnProfiles": {
    "ui:widget": "textarea"
  },
  "S00304_ProfileSequence": {
    "ui:widget": "textarea"
  },
  "S00304_SequenceDetails": {
    "ui:widget": "textarea"
  },
  "S00304_VariableIdConfig": {
    "ui:widget": "textarea"
  },
  "S00304_ProfileSched": {
    "ui:widget": "textarea"
  },
  "S00304DynamicProfileConf": {
    "ui:widget": "textarea"
  }
}

````

The new gift page is available at the link /visualization/#/services

When saving, the data is saved in core.DartsConfigJson . And also the values of varvalues are updated
