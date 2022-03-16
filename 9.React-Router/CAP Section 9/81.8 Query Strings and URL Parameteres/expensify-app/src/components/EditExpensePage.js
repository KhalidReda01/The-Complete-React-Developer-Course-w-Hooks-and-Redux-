import React from "react";
const EditExpensePage = (props) => {
console.log(props)
  return (
  <div>
    This is from my Edit Expense component
  </div>
)
} 
export default EditExpensePage;
/**
 * http://localhost:8080/edit?query=rent&sort=date
 * {
    "match": {
        "path": "/edit",
        "url": "/edit",
        "isExact": true,
        "params": {}
    },
    "location": {
        "pathname": "/edit",
        "search": "?query=rent&sort=date",
        "hash": ""
    },
    "history": {
        "length": 5,
        "action": "POP",
        "location": {
            "pathname": "/edit",
            "search": "?query=rent&sort=date",
            "hash": ""
        }
    }
}

// http://localhost:8080/edit#contact-us
{
    "match": {
        "path": "/edit",
        "url": "/edit",
        "isExact": true,
        "params": {}
    },
    "location": {
        "pathname": "/edit",
        "search": "",
        "hash": "#contact-us"
    },
    "history": {
        "length": 6,
        "action": "POP",
        "location": {
            "pathname": "/edit",
            "search": "",
            "hash": "#contact-us"
        }
    }
}
 */