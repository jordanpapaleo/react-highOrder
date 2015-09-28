export default {
  module: "root",
  children: [
    {
      "module":"section",
      "children":
        [
          {
             "module":"header",
          },
          {
             "module":"paragraph",
          },
          {
             "module":"image",
          },
          {
            "module":"section",
            "children":
              [
                {
                   "module":"header",
                },
                {
                   "module":"paragraph",
                },
                {
                   "module":"image",
                }
              ]
          },
        ]
    },
    {
      "module":"section",
      "children":[
        {
           "module":"column",
        },
        {
           "module":"video",
        }
      ]
    },
    {
      "module":"image"
    },
  ]
}


/*{
  "module": "section",
  "children": [
    {
      "module": "header",
      "id": 2,
      "parent_id": 1,
      "children": []
    },
    {
      "module": "paragraph",
      "id": 3,
      "parent_id": 1,
      "children": []
    },
    {
      "module": "image",
      "id": 4,
      "parent_id": 1,
      "children": []
    },
    {
      "module": "section",
      "children": [
        {
          "module": "header",
          "id": 6,
          "parent_id": 5,
          "children": []
        },
        {
          "module": "paragraph",
          "id": 7,
          "parent_id": 5,
          "children": []
        },
        {
          "module": "image",
          "id": 8,
          "parent_id": 5,
          "children": []
        }
      ],
      "id": 5,
      "parent_id": 1
    }
  ],
  "id": 1,
  "parent_id": 0
}*/
